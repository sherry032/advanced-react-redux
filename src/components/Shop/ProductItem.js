import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispacth = useDispatch()
  const addToCartHandler =()=>{
    const item = {
      title, price, quantity: 1, total: price
    }
    dispacth(cartActions.addItem(item))
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
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
