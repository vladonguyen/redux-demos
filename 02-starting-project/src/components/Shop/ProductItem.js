import { cartSliceActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch, useSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();
  const increaseHandler = ()=>{
    dispatch(cartSliceActions.increment())
  };

  const showProductsHandler = ()=>{
    dispatch(uiActions.show())
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=> {increaseHandler(); showProductsHandler();}}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
