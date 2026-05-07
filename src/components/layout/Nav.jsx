import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import CartWidget from '../CartWidget';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><Link className={styles.link} to="/">Inicio</Link></li>
        <li><Link className={styles.link} to="/productos">Productos</Link></li>
        <li><Link className={styles.link} to="/carrito">Carrito</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
};

export default Nav;