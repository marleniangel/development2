export default function Cart(props) {
    if (props.cartItems.length === 0) {
      return (
        <div className="Cart">
          <div className="cart">
            <div>
              <p>Nothing here yet</p>
            </div>
  
          </div>
        </div>
      );
    } else {
      return (
        <div className="cart">
          <div className="cart">
            <div>
              {props.cartItems.map((cartItem) => (
                <div>
                  <p>
                    {cartItem.number} {cartItem.name}
                  </p>
                </div>
              ))}
            </div>
            <h1>Total: ${props.cartPrice}</h1>
          </div>
        </div>
      );
    }
  }