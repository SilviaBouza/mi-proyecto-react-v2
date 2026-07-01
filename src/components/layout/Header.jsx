import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

import styles from "./Header.module.css";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import BarraBusqueda from "../search/BarraBusqueda";

const Header = () => {
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

/*import { Link } from "react-router-dom";
import Nav from "./Nav";

import styles from "./Header.module.css";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

import BarraBusqueda from "../search/BarraBusqueda";
import CartWidget from "../CartWidget";



const Header = () => {

  const { obtenerCantidadTotal } = useCart();
  const { user, logout } = useAuth();

  const totalItems = obtenerCantidadTotal();

  //---------------------------------------
  // Capitalizar nombre
  //---------------------------------------

  const capitalizar = (texto = "") =>
    texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

  //---------------------------------------
  // Obtener nombre mostrado
  //---------------------------------------

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

//       

//       <div className={styles.brandSection}>

//         <Link
//           to="/"
//           className={styles.brandLogo}
//         >
//           TechStore
//         </Link>

//         <span className={styles.subtitle}>
//           Tecnología y desarrollo web
//         </span>

//       </div>

//      

//       <div className={styles.centerSection}>
//         <Nav />
//       </div>

//   

//       <div className={styles.rightSection}>

//         <BarraBusqueda />

//         <div className={styles.userArea}>

//           {user ? (
//             <>

//               <span className={styles.saludo}>
//                 Hola, {obtenerNombre()}
//               </span>

//               {user.rol === "admin" && (
//                 <Link
//                   to="/dashboard"
//                   className={styles.adminButton}
//                 >
//                   Panel
//    
//                 </Link>
//               )}

//               <button
              
//                 className={styles.logoutButton}
                
//               >
//                 Salir
//               </button>

//             </>
//           ) : (

//             <>
//               <Link
//                 to="/login"
//                 className={styles.loginButton}
//               >
//                 Ingresar
//               </Link>

//               <Link
//                 to="/register"
//                 className={styles.registerButton}
//               >
//                 Registrarse
//               </Link>
//             </>

//           )}

//         </div>

//       

//         <Link
//           to="/carrito"
//           className={styles.cartLink}
//         >

//           <div className={styles.cartContainer}>

//             <CartWidget />

//             {totalItems > 0 && (
//               <span className={styles.badge}>
//                 {totalItems}
//               </span>
//             )}

//           </div>

//         </Link>

//       </div>

//     </header>

//   );
// };

// export default Header;*/




// /*import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <header className={styles.header}>

//       <div className={styles.container}>

//         <div>
//           <h1 className={styles.logo}>
//             TechStore
//           </h1>

//           <p className={styles.subtitle}>
//             Tecnología y desarrollo web
//           </p>
//         </div>

//       </div>

//     </header>
//   );
// };

// export default Header;*/