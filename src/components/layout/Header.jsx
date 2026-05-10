import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.container}>

        <div>
          <h1 className={styles.logo}>
            TechStore
          </h1>

          <p className={styles.subtitle}>
            Tecnología y desarrollo web
          </p>
        </div>

      </div>

    </header>
  );
};

export default Header;