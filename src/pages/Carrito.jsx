/*import { useCart } from '../context/CartContext';
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

export default Carrito;*/


import { useCart } from "../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import styles from "./Carrito.module.css";

const Carrito = () => {
  const {
    carrito,
    incrementarCantidad,
    decrementarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    obtenerPrecioTotal,
  } = useCart();

  if (carrito.length === 0) {
    return (
      <div className={styles.carritoVacio}>
        <FaShoppingCart className={styles.iconoCarrito} />

        <h2 className={styles.tituloVacio}>
          El carrito está vacío
        </h2>

        <p className={styles.subtituloVacio}>
          Agrega productos para continuar la compra.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.tituloPagina}>Carrito de Compras</h2>

      {carrito.map((prod) => (
        <div key={prod.id} className={styles.card}>
          <div>
            <h3>{prod.nombre}</h3>

            <p>Precio: ${prod.precio}</p>

            <p>Cantidad: {prod.cantidad}</p>

            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
          </div>

          <div className={styles.botones}>
            <button
              className={styles.btnCantidad}
              onClick={() => decrementarCantidad(prod.id)}
            >
              -
            </button>

            <span className={styles.cantidad}>
              {prod.cantidad}
            </span>

            <button
              className={styles.btnCantidad}
              onClick={() => incrementarCantidad(prod.id)}
            >
              +
            </button>

            <button
              className={styles.btnEliminar}
              onClick={() => eliminarDelCarrito(prod.id)}
              title="Eliminar producto"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      <hr className={styles.linea} />

      <h3 className={styles.total}>
        Total a pagar: ${obtenerPrecioTotal()}
      </h3>

      <div className={styles.contenedorBoton}>
        <button
          className={styles.btnVaciar}
          onClick={vaciarCarrito}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Carrito;