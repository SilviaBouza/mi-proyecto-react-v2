import { Link } from 'react-router-dom';
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

export default Item;