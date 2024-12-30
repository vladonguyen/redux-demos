import { Fragment } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';


const Cart = (props) => {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const quantity = useSelector(state => state.cart.quantity);
  const price = useSelector(state => state.cart.price);
  const total = quantity * price;

  return (
    <Fragment>
      {cartIsVisible && <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        {quantity > 0 ? (<ul>
          <CartItem
            item={{ title: 'Test Item' }}
            quantity={quantity}
            price={price}
            total={total}
          />
        </ul>) : "No products in cart!"}
      </Card>}
    </Fragment>
  );
};

export default Cart;
