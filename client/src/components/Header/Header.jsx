import React, {useEffect} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import {IconButton, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        headerIcon: {
            minWidth: 50,
            marginLeft: 30,
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
        basketIcon: {
            fontSize: 50,
            color: '#bdb5b5',
        },
        phoneIconButton: {
            position: 'absolute',
            minWidth: 40,
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
        phoneIcon: {
            fontSize: 40,
            color: '#c7ec7c',
        }
    })
)

const Header = ({searchText}) => {

    // const [inputValue, setInputValue] = useState(anc);

    const {phoneIcon, headerIcon, basketIcon} = useStyles()

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
        return () => {
            searchText({currentTarget: {
                value: ''
                }
            });
        }
    }, []);


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
                    <a href={'tel:+380730505563'}>
                        <IconButton className={headerIcon}>
                            <PermPhoneMsgIcon className={phoneIcon}/>
                        </IconButton>
                        <div className="header__phone_number">+380 73 050 55 63</div>
                    </a>
                </div>
                <div className={"header__search"}>
                    <input placeholder={'Пошук товарів'} type={'search'} onKeyUp={searchText}/>
                    <div className={"header__icon"}>
                        <div className={"header__icon_fixed"}>
                        <span className={"header__inbasket"}>
                            {itemsCount ? itemsCount : ''}
                        </span>
                            <NavLink to={'/basket'}>
                                <IconButton className={headerIcon}>
                                    <ShoppingCart className={basketIcon}/>
                                </IconButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header header__center">
                <div className={"header__title"}>
                    Завітайте до нас за адресою:
                    <a href="https://maps.app.goo.gl/m7H8jk5311XCQxrT9" target="_blank"> вул. Героїв Дніпра, 51, Київ,
                        02000 (дивитись на карті) </a>
                    або ми доставимо Вам товари по Києву си у будь-яку іншу точку України
                    <div className="header__delivery">
                        <NavLink to="/delivery">
                            Ознайомитись з умовами оплати та доставки
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header
