import classes from './CartItem.module.css';

import {useDispatch} from "react-redux";
import { cartSliceActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title } = props.item;
  const quantity = props.quantity;
  const price = props.price;
  const total = props.total;

  const dispatch = useDispatch();

  const increaseHandler = ()=>{
    dispatch(cartSliceActions.increment());
  };

  const decreaseHandler = ()=>{
    dispatch(cartSliceActions.decrement());
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
