import React, {useEffect, useState, useRef} from 'react'
import {useLocation} from "react-router-dom";


const Header = ({searchText}) => {

    // const [inputValue, setInputValue] = useState(anc);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                searchText({
                    currentTarget: {
                        value: location.hash.substr(1)
                    }
                });
            }, 300)
        }
    }, []);


    // useEffect(() => {
    //     const hash = location.hash
    //     setTimeout(() => {
    //         if (hash && document.getElementById(hash.substr(1))) {
    //             document.getElementById(hash.substr(1)).scrollIntoView({behavior: "auto"})
    //         }
    //     }, 300)
    // }, [location.hash]);


    return (
        <header className="header header__center">
            <div className={"heder__title"}>Ликвидация цен на все семена</div>
            <div className={"header__search"}>
                <input placeholder={'Поиск'} type={'text'} onKeyUp={searchText}/>
            </div>
        </header>
    );
}

export default Header
