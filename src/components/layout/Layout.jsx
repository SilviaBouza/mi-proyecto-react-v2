import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>

      <Header />

      <Nav />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;