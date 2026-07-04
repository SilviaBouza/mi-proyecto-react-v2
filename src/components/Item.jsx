/*import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ producto }) => {
  return (
    <div className={styles.card}>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.image}
      />

      <h3 className={styles.title}>{producto.nombre}</h3>

      <p className={styles.price}>${producto.precio}</p>

      <Link to={`/producto/${producto.id}`}>
        <button className={styles.button}>
          Ver detalle
        </button>
      </Link>

    </div>
  );
};

export default Item;*/
import { useState } from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Item({ nombre, stock, precio, imagen, id }) {
  const [favorito, setFavorito] = useState(false);
  const [agregado, setAgregado] = useState(false); // Nuevo estado para el feedback

  const { agregarACarrito } = useCart();

  const toggleFavorito = () => setFavorito(!favorito);

  const manejarAgregarACarrito = () => {
    if (stock <= 0 || agregado) return;

    const producto = { id, nombre, precio, imagen, cantidad: 1 };
    agregarACarrito(producto);
    // Efecto de feedback
    setAgregado(true);
    // Volver al estado original después de 1.5 segundos
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <article className={estilos.card}>
      <Link to={`/producto/${id}`} className={estilos.imageWrapper}>
        <img src={imagen} alt={nombre} className={estilos.imagen} />
        <div className={estilos.imagenOverlay} />
      </Link>

      <div className={estilos.body}>
        <div className={estilos.header}>
          <Link to={`/producto/${id}`} className={estilos.nombreLink}>
            <h2 className={estilos.nombre}>{nombre}</h2>
          </Link>
          <button
            onClick={toggleFavorito}
            className={`${estilos.favorito} ${favorito ? estilos.favoritoActivo : ''}`}
            aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {favorito ? '♥' : '♡'}
          </button>
        </div>

        <p className={estilos.precio}>
          <span className={estilos.moneda}>ARS</span>
          {Number(precio).toLocaleString('es-AR')}
        </p>

        <button 
          onClick={manejarAgregarACarrito} 
          className={`${estilos.btnDetalle} ${agregado ? estilos.btnAgregado : ''}`}
        >
          {agregado ? '¡Producto agregado!' : stock <= 0 ? 'Sin Stock' : 'Agregar al Carrito'}
        </button>
      </div>
    </article>
  );
}

export default Item;