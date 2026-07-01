import { useCart } from "../context/CartContext";

function CartWidget() {
  const { obtenerCantidadTotal } = useCart();

  return (
    <div>
      🛒 {obtenerCantidadTotal()}
    </div>
  );
}

export default CartWidget;