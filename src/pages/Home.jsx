import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido</h1>
      <p className={styles.subtitle}>
        Plataforma de productos tecnológicos
      </p>
    </div>
  );
};

export default Home;