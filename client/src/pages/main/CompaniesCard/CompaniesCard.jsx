import React from 'react'
import {NavLink} from "react-router-dom";

const CompaniesCard = ({company, someShit, setSomeShit}) => {

    const addItemToBasket = (company) => {
        const basket = localStorage.getItem('basket');
        const parsedBasket = basket ? JSON.parse(basket) : {}
        const items = {
            ...parsedBasket, [company.name]: {
                image: company.image,
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
                    <div>{company.name}</div> <div>{company.price} грн.</div>
                </div>
            </NavLink>
            <button onClick={() => addItemToBasket(company)}>Купить</button>
        </div>
    )
}

export default CompaniesCard
