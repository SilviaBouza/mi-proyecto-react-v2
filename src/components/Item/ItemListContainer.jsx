import { useEffect, useState } from 'react';
import Item from './Item';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

  const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, 'productos-nacionales');

        const querySnapshot = await getDocs(productosRef);

        const productosFirebase = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
      }));
        console.log(productosFirebase);

        setProductos(productosFirebase);
      } catch (error) {
        //console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>
      <h2>Catálogo de productos</h2>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        {productos.map(producto => (
          <Item
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;