import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

const Delivery = () => {

    return (
        <div className="delivery">
            <div className="basket_go-back-button">
                <NavLink to={'/'}>
                    <Button startIcon={<ArrowBackIos/>}
                            variant='contained'
                            size='large'
                            color='secondary'
                    >
                        До списку товарів
                    </Button>
                </NavLink>
            </div>
            <h2 className="delivery_title">Умови оплати та доставки</h2>
            <div className="delivery_content">
                <div className="delivery__section_title">Способи доставки:</div>
                <div className="delivery__section_title">Оплата:</div>
            </div>
        </div>)
}

export default Delivery;
