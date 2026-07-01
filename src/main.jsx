<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./context/CartContext.jsx";
import { ProductosProvider } from "./context/ProductosContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BusquedaProvider } from "./context/BusquedaContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BusquedaProvider>
      <AuthProvider>
        <ProductosProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ProductosProvider>
      </AuthProvider>
    </BusquedaProvider>
  </BrowserRouter>,
);


/*import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";

=======
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext';
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4


createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
<<<<<<< HEAD
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
</BrowserRouter>
)*/
=======
  <CartProvider>
    <App />
  </CartProvider>
</BrowserRouter>
)
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
