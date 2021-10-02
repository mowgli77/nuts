import React from 'react'

export const BasketItem = ({item}) => {

    return (
        <div className={'basket_item'}>
            <div className="basket_item__image">
                <img src={item.image} alt="image"/>
            </div>
            <div className={'basket_item__name'}>{item.name}</div>
            <div>{item.price}</div>
            <div>count</div>
            <div>total</div>
        </div>
    );
}
