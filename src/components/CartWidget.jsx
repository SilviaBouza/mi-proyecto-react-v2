import { useCart } from "../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { obtenerCantidadTotal } = useCart();

  return (
    <div className={styles.cart}>
      🛒 {obtenerCantidadTotal()}
    </div>
  );
};

export default CartWidget;