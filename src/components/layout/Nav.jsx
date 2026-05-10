import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import CartWidget from '../CartWidget';

const Nav = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.container}>

        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Inicio
          </Link>

          <Link className={styles.link} to="/productos">
            Productos
          </Link>

          <Link className={styles.link} to="/carrito">
            Carrito
          </Link>
        </div>

        <CartWidget />

      </div>

    </nav>
  );
};

export default Nav;