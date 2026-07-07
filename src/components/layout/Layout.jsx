import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />

      <Nav
        menuOpen={menuOpen}
        closeMenu={closeMenu}
      />

      {/* Fondo oscuro al abrir el menú */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
        />
      )}

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;