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