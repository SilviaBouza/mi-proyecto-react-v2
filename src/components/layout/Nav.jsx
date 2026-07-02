import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Nav.module.css";

const Nav = () => {
  const { user } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          Carrito
        </NavLink>

        {user?.rol === "admin" && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;