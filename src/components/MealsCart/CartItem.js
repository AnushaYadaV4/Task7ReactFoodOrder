import classes from './CartItem.module.css';
const CartItem = (props) => {
  

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
        <span className={classes.amount}>RS {props.price}</span>

        <span className={classes.amount}>{props.quantity}</span>
        </div>
      </div>
      
    </li>
  );
};
export default CartItem;