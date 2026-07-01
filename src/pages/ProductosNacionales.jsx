import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import styles from './productosNacionales.module.css';

const ProductosNacionales = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosDB = collection(db, 'productos-nacionales');

    getDocs(productosDB)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Productos Nacionales</h1>

      <div className="lista-productos">
        {productos.map((prod) => (
          <div key={prod.id}>
            <img
              src={prod.imagen}
              alt={prod.nombre}
              style={{ width: '100px' }}
            />

            <h3>{prod.nombre}</h3>
            <p>Categoría: {prod.categoria}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Stock: {prod.stock} unidades</p>

            <Link to={`/productos-nacionales/${prod.id}`}>
              Ver detalle
            </Link>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosNacionales;