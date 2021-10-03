import {BasketItem} from "./BasketItem/BasketItem";
import {Button} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {OrderModal} from "../../../components/modals/OrderModal/OrderModal";


const Basket = ({someShit, setSomeShit}) => {

    const [isOrderModalOpen, setOrderModalOpen] = useState(false)

    const getItems = () => {
        const items = localStorage.getItem('basket')
        const parsedItems = items ? JSON.parse(items) : {}
        return Object.values(parsedItems)
    };
    const items = getItems();

    const clearBasket = () => {
        localStorage.removeItem('basket')
        localStorage.removeItem('items')
        setSomeShit(!someShit)
    };

    const total = items.reduce((result, item) => result + Number(item.total), 0).toFixed(2);

    const isPurchases = items.length;
    return (
        <div>
            {isOrderModalOpen && <OrderModal onCancel={() => setOrderModalOpen(false)}
                                             items={items}
                                             clearBasket={clearBasket}
                                             total={total}
            />}
            <div className="basket">
                <div className='basket_go-back-button'>
                    <NavLink to={'/'}>
                        <Button startIcon={<ArrowBackIos/>}
                                variant='contained'
                                size='large'
                                color='secondary'
                        >
                            Go Back
                        </Button>
                    </NavLink>
                </div>
                <h2 className="basket_title">КОРЗИНА</h2>
                <div className='basket_header'>
                    <div>товар</div>
                    <div>ціна</div>
                    <div>кількість</div>
                    <div>всього</div>
                </div>
                <div className="basket_content">
                    {!isPurchases ? <h2>Ваша корзина пока пуста</h2>
                        : items.map(item => <div>
                            <BasketItem item={item} someShit={someShit} setSomeShit={setSomeShit}/>
                        </div>)
                    }
                    <div className='basket_total'>
                        <div/>
                        <div/>
                        <div>Total:</div>
                        <div>{total} грн</div>
                    </div>
                    <div className="basket_buttons">
                        <Button variant='contained' color='primary' onClick={() => setOrderModalOpen(true)}>
                            Make Order
                        </Button>
                        <Button variant='contained' color='secondary' onClick={clearBasket}>Clear basket</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket
