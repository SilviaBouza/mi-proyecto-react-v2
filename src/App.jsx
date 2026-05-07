import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
    
