import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
  FaTools,
  FaLaptopCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import styles from "./Header.module.css";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import BarraBusqueda from "../search/BarraBusqueda";

const Header = ({ menuOpen, toggleMenu }) => {
  const { obtenerCantidadTotal } = useCart();
  const { user, logout } = useAuth();

  const totalItems = obtenerCantidadTotal();

  const capitalizar = (texto = "") =>
    texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

  const obtenerNombre = () => {
    if (user?.nombre) {
      return capitalizar(user.nombre.split(" ")[0]);
    }

    if (user?.email) {
      return capitalizar(
        user.email
          .split("@")[0]
          .split(".")[0]
          .split("-")[0]
      );
    }

    return "Usuario";
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ================= LOGO ================= */}
        <Link to="/" className={styles.logo}>
          <FaLaptopCode className={styles.logoIcon} />
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div>
            <h1>TechStore</h1>
            <span>Tecnología para todos</span>
          </div>
        </Link>

        {/* ================= BUSCADOR ================= */}
        <div className={styles.searchArea}>
          <BarraBusqueda />
        </div>

        {/* ================= USUARIO ================= */}
        <div className={styles.actions}>
          {user ? (
            <>
              <div className={styles.userInfo}>
                <FaUserCircle className={styles.userIcon} />

                <span>
                  Hola, <strong>{obtenerNombre()}</strong>
                </span>
              </div>

              {user.rol === "admin" && (
                <Link
                  to="/dashboard"
                  className={styles.iconButton}
                  title="Panel"
                >
                  <FaTools />
                </Link>
              )}

              <button
                onClick={logout}
                className={styles.iconButton}
                title="Salir"
              >
                <FaSignOutAlt />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={styles.loginButton}
            >
              <FaUserCircle />
              <span>Ingresar</span>
            </Link>
          )}

          {/* ================= CARRITO ================= */}
          <Link
            to="/carrito"
            className={styles.cartButton}
          >
            <FaShoppingCart />

            {totalItems > 0 && (
              <span className={styles.badge}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;