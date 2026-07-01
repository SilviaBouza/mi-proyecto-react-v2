<<<<<<< HEAD
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { obtenerCantidadTotal } = useCart();

  return (
    <div>
      🛒 {obtenerCantidadTotal()}
    </div>
  );
}
=======
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
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4

export default CartWidget;