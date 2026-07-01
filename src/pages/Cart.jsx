import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cart.map(prod => (
          <div key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;