<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetail from './pages/ItemDetail';
import Carrito from "./pages/Carrito";
import ProductosNacionalesDetalle from './pages/ProductosNacionalesDetalle';
import Dashboard from './components/forms/Dashboard';
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import './App.css';
=======
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD

        <Route
          path="/productos"
          element={<ItemListContainer />}
        />

        <Route
          path="/producto/:id"
          element={<ItemDetail />}
        />

        <Route
          path="/productos-nacionales/:id"
          element={<ProductosNacionalesDetalle />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/dashboard"
          element={   
              <Dashboard />}
          
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

=======
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/carrito" element={<Cart />} />
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
      </Routes>
    </Layout>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
    
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
