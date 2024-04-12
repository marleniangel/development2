import React from 'react';
import Button from './button'; 

export default function Vinyl(props) {
    const isInCart = props.cart.some((item) => item.name === props.name);
    return (
        <div className="Vinyl">
            <div>
                <img src={props.image} className="vinyl-image" alt={props.name} />
            </div>
            <div>
                {props.name}, {props.genre}, {props.price}
            </div>
            <Button
             cartItems={props.cart}
             price={props.price}
             updateCart={props.updateCart}
             name={props.name}
             updatePrice={props.updatePrice}
             currPrice={props.currPrice}
             isInCart={isInCart}
/>
        </div>
    );
}
