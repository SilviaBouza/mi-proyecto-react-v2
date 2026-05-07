import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* GRID */}
        <div className={styles.grid}>

          {/* Empresa */}
          <div>
            <h2 className={styles.title}>Mi Empresa</h2>
            <p className={styles.text}>
              Desarrollo de soluciones web modernas, escalables y seguras.
            </p>

            <div className={styles.text}>
              <p>📍 Buenos Aires, Argentina</p>
              <p>📧 contacto@miempresa.com</p>
              <p>📞 +54 11 1234-5678</p>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className={styles.subtitle}>Navegación</h3>
            <Link to="/" className={styles.link}>Inicio</Link>
            <Link to="/productos" className={styles.link}>Productos</Link>
            <Link to="/carrito" className={styles.link}>Carrito</Link>
          </div>

          {/* Redes */}
          <div>
            <h3 className={styles.subtitle}>Seguinos</h3>
            <a className={styles.link}>LinkedIn</a>
            <a className={styles.link}>GitHub</a>
            <a className={styles.link}>Instagram</a>
          </div>

        </div>

        {/* Equipo */}
        <div className={styles.team}>
          <h3 className={styles.subtitle}>Nuestro equipo</h3>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>Ana Gómez</h4>
              <p>Frontend</p>
            </div>

            <div className={styles.card}>
              <h4>Luis Pérez</h4>
              <p>Backend</p>
            </div>

            <div className={styles.card}>
              <h4>Carla Díaz</h4>
              <p>UX/UI</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;