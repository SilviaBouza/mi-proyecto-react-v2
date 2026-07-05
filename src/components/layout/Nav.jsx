import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Nav.module.css";

const Nav = ({ menuOpen, closeMenu }) => {
  const { user } = useAuth();

  return (
    <nav
  className={`${styles.nav} ${
    menuOpen ? styles.mobileOpen : ""
  }`}
>
      <div className={styles.container}>
        <NavLink
          to="/"
          end
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
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
            onClick={closeMenu}
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