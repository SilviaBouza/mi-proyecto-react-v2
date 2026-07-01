import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Carrito = () => {
  const {
    carrito,
    incrementarCantidad,
    decrementarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    obtenerPrecioTotal
  } = useCart();

  if (carrito.length === 0) {
    return (
      <div>
        <h2>Carrito</h2>
        <p>El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {carrito.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <button
              onClick={() => decrementarCantidad(prod.id)}
            >
              -
            </button>

            <span>{prod.cantidad}</span>

            <button
              onClick={() => incrementarCantidad(prod.id)}
            >
              +
            </button>

            <button
              onClick={() => eliminarDelCarrito(prod.id)}
              title="Eliminar producto"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h3>Total a pagar: ${obtenerPrecioTotal()}</h3>

      <button
        onClick={vaciarCarrito}
        style={{
          marginTop: '10px',
          padding: '10px 20px'
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Carrito;