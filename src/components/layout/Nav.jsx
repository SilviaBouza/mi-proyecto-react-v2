<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const { user } = useAuth();

=======
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import CartWidget from '../CartWidget';

const Nav = () => {
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
  return (
    <nav className={styles.nav}>

      <div className={styles.container}>

<<<<<<< HEAD
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Carrito
        </NavLink>

        {user?.rol === "admin" && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Dashboard
          </NavLink>
        )}
=======
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
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4

      </div>

    </nav>
  );
};

export default Nav;