import React from 'react'
import {NavLink} from "react-router-dom";

const CompaniesCard = ({company, someShit, setSomeShit}) => {

    const addItemToBasket = (company) => {
        const basket = localStorage.getItem('basket');
        const parsedBasket = basket ? JSON.parse(basket) : {}
        console.log(parsedBasket)
        const items = {
            ...parsedBasket, [company.name]: {
                name: company.name,
                price: company.price
            }
        }
        localStorage.setItem('basket', JSON.stringify(items))
        localStorage.setItem('items', Object.keys(items).length)
        setSomeShit(!someShit)
    }

    return (
        <div id={company.anchorr} className={"companies-card"}>
            <NavLink to={`/about/${company.anchorr}`}>
                <div className={`companies-card__image ${!company.description && 'boss'}`}>
                    <img src={company.image}/>
                </div>
                <div className={`companies-card__description ${company.description && 'boss'}`}>
                    {company.description}
                </div>
                <div className={`companies-card__label`}>
                    {company.name}: {company.price} грн.
                </div>
            </NavLink>
            <button onClick={() => addItemToBasket(company)}>Купить</button>
        </div>
    )
}

export default CompaniesCard
