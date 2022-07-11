import { useDispatch, useSelector } from 'react-redux';
import {uiActions} from "../../store/UiSlice"
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispacth = useDispatch()
  const badge = useSelector(state => state.cart.items.reduce((total, item)=> total + item.quantity, 0))
  const toggleCartHandler=()=>{
    dispacth(uiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
