import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import classes from './CartItem.module.css';

const CartItem = ({item}) => {
  const { title, quantity, total, price } = item;
  const dispacth = useDispatch();
  const decreaseHandler = function(){
    dispacth(cartActions.decreaseQty(item))
  }
  const increaseHandler = () => {
    dispacth(cartActions.increaseQty(item))
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
