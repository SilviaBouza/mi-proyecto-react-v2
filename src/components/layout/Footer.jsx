import styles from './Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.team}>
          <h2 className={styles.title}>
            Nuestro Equipo
          </h2>

          <div className={styles.cards}>

            <div className={styles.card}>
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Ana Gómez"
                className={styles.avatar}
              />

              <h4>Ana Gómez</h4>
              <p>Frontend Developer</p>
            </div>

            <div className={styles.card}>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Luis Pérez"
                className={styles.avatar}
              />

              <h4>Luis Pérez</h4>
              <p>Backend Developer</p>
            </div>

            <div className={styles.card}>
              <img
                src="https://i.pravatar.cc/150?img=45"
                alt="Carla Díaz"
                className={styles.avatar}
              />

              <h4>Carla Díaz</h4>
              <p>UX/UI Designer</p>
            </div>
            

          </div>
        </div>

            

        <div className={styles.bottom}>
          <p>
            © 2026 TechStore - Todos los derechos reservados
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
