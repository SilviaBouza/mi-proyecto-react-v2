import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetail from "./pages/ItemDetail";
import Carrito from "./pages/Carrito";
//import ProductosNacionalesDetalle from "./item/ProductosNacionalesDetalle";
import Dashboard from "./components/forms/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RutasProtegidas from './components/RutasProtegidas';
import ResultadoBusqueda from './components/search/ResultadoBusqueda'
import './App.css';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/productos"
          element={<ItemListContainer />}
        />

        <Route
          path="/producto/:id"
          element={<ItemDetail />}
        />

        

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route 
            path="/dashboard" 
            element={
              <RutasProtegidas rolesPermitidos={["admin"]}>
                <Dashboard />
              </RutasProtegidas>
        }
        />
 
        <Route
          path="/login"
          element={<Login />}
        />

        <Route 
        path="/busqueda"
         element={<ResultadoBusqueda />} />
        
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </Layout>
  );
}

export default App;