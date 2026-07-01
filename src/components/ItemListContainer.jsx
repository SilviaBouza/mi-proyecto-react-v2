import { useEffect, useState } from 'react';
import Item from './Item';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Catálogo de productos</h2>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {productos.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;