import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Item.module.css';

const Item = ({ producto }) => {
  const [favorito, setFavorito] = useState(false);
  const [agregado, setAgregado] = useState(false);

  const {  agregarACarrito } = useCart();

  const toggleFavorito = () => setFavorito(!favorito);

  const manejarAgregarACarrito = () => {
    if (producto.stock <= 0 || agregado) return;

     agregarACarrito({
      id: producto.firestoreId,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
    });

    setAgregado(true);

    setTimeout(() => {
      setAgregado(false);
    }, 1500);
  };

  return (
    <article className={styles.card}>
      <Link
        to={`/producto/${producto.firestoreId}`}
        className={styles.imageWrapper}
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={styles.imagen}
        />
        <div className={styles.imagenOverlay}></div>
      </Link>

      <div className={styles.body}>
        <div className={styles.header}>
          <Link
            to={`/producto/${producto.firestoreId}`}
            className={styles.nombreLink}
          >
            <h2 className={styles.nombre}>{producto.nombre}</h2>
          </Link>

          <button
            onClick={toggleFavorito}
            className={`${styles.favorito} ${
              favorito ? styles.favoritoActivo : ''
            }`}
            aria-label={
              favorito
                ? 'Quitar de favoritos'
                : 'Agregar a favoritos'
            }
          >
            {favorito ? '♥' : '♡'}
          </button>
        </div>

        <p className={styles.precio}>
          <span className={styles.moneda}>ARS </span>
          {Number(producto.precio).toLocaleString('es-AR')}
        </p>

        <button
          onClick={manejarAgregarACarrito}
          className={`${styles.btnDetalle} ${
            agregado ? styles.btnAgregado : ''
          }`}
          disabled={producto.stock <= 0}
        >
          {agregado
            ? '¡Producto agregado!'
            : producto.stock <= 0
            ? 'Sin Stock'
            : 'Agregar al Carrito'}
        </button>
      </div>
    </article>
  );
};

export default Item;