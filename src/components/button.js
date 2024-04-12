export default function Button(props) {
    function handleAddToCart() {
        let newItem = true;
        let updatePrice = 0.0;

        let newCartItem = {
            name: props.name,
            price: props.price,
            number: 1,
        };

        for (let i = 0; i < props.cartItems.length; i++) {
            if (newCartItem.name === props.cartItems[i].name) {
                newItem = false;
                updatePrice = props.cartItems[i].price;
            }
        }

        if (newItem) {
            props.updateCart([...props.cartItems, newCartItem]);
            updatePrice = newCartItem.price;
        } else {
            props.updateCart(
                props.cartItems.map((cartItem) => {
                    if (cartItem.name === newCartItem.name) {
                        return { ...cartItem, number: cartItem.number + 1 };
                    } else {
                        return cartItem;
                    }
                })
            );
        }

        let newPrice = props.currPrice + updatePrice;
        let fixedPrice = Math.round(newPrice * 100) / 100;
        props.updatePrice(fixedPrice);
    }

    function handleRemoveFromCart() {
        const updatedCart = props.cartItems.filter((item) => item.name !== props.name);
        const removedItem = props.cartItems.find((item) => item.name === props.name);
        const newPrice = props.currPrice - removedItem.price * removedItem.number;
        props.updateCart(updatedCart);
        props.updatePrice(newPrice);
    }

    return (
        <div className="Button">
            <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
            {props.isInCart && (
                <button className="cart-button" onClick={handleRemoveFromCart}>Remove from Cart</button>
            )}
        </div>
    );
}
