import React, {useEffect, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import {IconButton, makeStyles} from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
        phoneIconButton: {
            minWidth: 25,
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
        phoneIcon: {
            fontSize: 25,
            color: '#c7ec7c',
        },
        iconCloseButton: {
            position: 'absolute',
            right: 0,
            minWidth: 35
        },
        closeIcon: {
            fontSize: 40,
            color: 'red',
        }
    })
);

const Header = ({searchText}) => {

    const [inputValue, setInputValue] = useState('');

    const {phoneIcon, phoneIconButton, iconCloseButton, closeIcon} = useStyles()

    const location = useLocation();

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

    const clearSearchInput = () => {
        searchText({
            currentTarget: {
                value: ''
            }
        });
        setInputValue('');
    }

    useEffect(() => {
        return () => {
            clearSearchInput();
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
                        <IconButton className={phoneIconButton}>
                            <PermPhoneMsgIcon className={phoneIcon}/>
                        </IconButton>
                        <div className="header__phone_number">+380 73 050 55 63</div>
                    </a>
                </div>
                <div className={"header__search"}>
                    <input
                        placeholder={'Пошук товарів'}
                        type={'text'}
                        onKeyUp={searchText}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
                    />
                    <IconButton className={iconCloseButton} onClick={clearSearchInput}>
                        <Cancel className={closeIcon}/>
                    </IconButton>
                </div>
            </div>
            <header className="header header__center">
                <div className={"header__title"}>
                    Завітайте до нас за адресою:
                    <a href="https://maps.app.goo.gl/m7H8jk5311XCQxrT9" target="_blank"> вул. Героїв Дніпра, 51, Київ,
                        02000 (дивитись на карті) </a>
                    або ми доставимо Вам товари по Києву чи у будь-яку іншу точку України
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
