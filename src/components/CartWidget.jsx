import { useCart } from '../context/CartContext';
import styles from './CartWidget.module.css';

const CartWidget = () => {
  const { getTotalItems } = useCart();

  return (
    <div className={styles.cart}>
      🛒 {getTotalItems()}
    </div>
  );
};

export default CartWidget;