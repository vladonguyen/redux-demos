import { Fragment } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';


const Cart = (props) => {
const cartIsVisible = useSelector(state=> state.ui.cartIsVisible);

  return (
    <Fragment>
   {cartIsVisible && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>}
    </Fragment>
  );
};

export default Cart;
