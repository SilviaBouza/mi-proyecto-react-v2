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



createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
</BrowserRouter>
)*/