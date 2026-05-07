import styles from './Layout.module.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;