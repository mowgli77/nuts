import {BasketItem} from "./BasketItem/BasketItem";


const Basket = ({someShit, setSomeShit}) => {

    const getItems = () => {
        const items = localStorage.getItem('basket')
        const parsedItems = items ? JSON.parse(items) : {}
        return Object.values(parsedItems)
    }
    const items = getItems();

    const clearBasket = () => {
        localStorage.removeItem('basket')
        localStorage.removeItem('items')
        setSomeShit(!someShit)
    }

    const isPurchases = items.length;
    return (
        <div>
            <h2 className="basket_title">КОРЗИНА</h2>
            {!isPurchases && <h2>Ваша корзина пока пуста</h2>}
            <div className='basket_header'>
                <div>товар</div>
                <div>ціна</div>
                <div>кількість</div>
                <div>всього</div>
            </div>
            <div className="basket_content">
                {
                    items.map(item => <div>
                        <BasketItem item={item}/>
                    </div>)
                }
                <div className="basket_buttons">
                    <button onClick={clearBasket}>Make Order</button>
                    <button onClick={clearBasket}>Clear basket</button>
                </div>
            </div>
        </div>
    );
}

export default Basket
