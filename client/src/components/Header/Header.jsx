import React, {useEffect, useState, useRef} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import {IconButton, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        headerIcon: {
            minWidth: 50,
            marginLeft: 30,
            backgroundColor: 'rgba(0,0,0,0.3)',
        },
        basketIcon: {
            fontSize: 50,
            color: 'green',
        },
    })
)

const Header = ({searchText}) => {

    // const [inputValue, setInputValue] = useState(anc);

    const {headerIcon, basketIcon} = useStyles()

    const location = useLocation();

    const itemsCount = localStorage.getItem('items')

    useEffect(() => {
    }, [itemsCount])

    // useEffect(() => {
    //     if (location.hash) {
    //         setTimeout(() => {
    //             searchText({
    //                 currentTarget: {
    //                     value: location.hash.substr(1)
    //                 }
    //             });
    //         }, 300)
    //     }
    // }, []);


    useEffect(() => {
        const hash = location.hash
        setTimeout(() => {
            if (hash && document.getElementById(hash.substr(1))) {
                document.getElementById(hash.substr(1)).scrollIntoView({behavior: "auto"})
            }
        }, 300)
    }, [location.hash]);


    return (
        <>
            <div className={"header__top"}>
                <div className={"header__phone"}>
                    <a href={'tel:+380631234567'}>
                        +38 (063) 123 45 67
                    </a>
                </div>
                <div className={"header__search"}>
                    <input placeholder={'Поиск товаров'} type={'text'} onKeyUp={searchText}/>
                    <div className={"header__icon"}>
                        <div className={"header__icon_fixed"}>
                        <span className={"header__inbasket"}>
                            {itemsCount ? itemsCount : ''}
                        </span>
                            <NavLink to={'/basket'}>
                                <IconButton className={headerIcon}>
                                    <ShoppingBasket className={basketIcon}/>
                                </IconButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header header__center">
                <div className={"header__title"}>
                    Пожалуйте к нам в гости по адресу: Киев, ул. Такаято, 666,
                    или мы доставим Вам по Киеву или в любую другую точку Украины
                </div>
            </header>
        </>
    );
}

export default Header
