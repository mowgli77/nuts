import React from 'react'
import {NavLink} from "react-router-dom";
import {addItemToBasket} from "../../../utils/helpers";

const CompaniesCard = ({company, someShit, setSomeShit}) => {

    return (
        <div id={company.anchorr} className={"companies-card"}>
            <NavLink to={`/about/${company.anchorr}`}>
                <div className={`companies-card__image ${!company.description && 'boss'}`}>
                    <img src={company.image} alt='image'/>
                </div>
                <div className={`companies-card__description ${company.description && 'boss'}`}>
                    {company.description}
                </div>
                <div className={`companies-card__label`}>
                    <div>{company.name}</div> <div>{company.price} грн.</div>
                </div>
            </NavLink>
            <button onClick={() => addItemToBasket(company, someShit, setSomeShit)}>Купить</button>
        </div>
    )
}

export default CompaniesCard
