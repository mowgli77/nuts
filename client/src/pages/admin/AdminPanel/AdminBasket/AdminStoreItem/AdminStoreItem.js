import React from 'react'
import {Button} from "@material-ui/core";
import {addItemToBasket} from "../../../../../utils/helpers";

export const AdminStoreItem = ({item, idx, someShit, setSomeShit}) => {

    return (
        <div className={'store_item'}>
            <div>{idx + 1}</div>
            <div className="store_item__image">
                <img src={item.image} alt="image"/>
            </div>
            <div className={'store_item__name'}>{item.name}</div>
            <div>{Number(item.price).toFixed(2)} грн / {item.points}</div>
            <Button variant='contained' color='primary' onClick={() => addItemToBasket(item, someShit, setSomeShit)}>Add to Basket</Button>
        </div>
    );
}
