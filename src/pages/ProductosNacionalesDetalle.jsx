import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
//import styles from './productosNacionales.module.css';

function ProductosNacionalesDetalle() {
  const [prod, setProd] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, 'productos-nacionales', id);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProd({
            ...resp.data(),
            id: resp.id,
          });
        } else {
          console.log('No se encontró el producto');
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={styles.CartaDetalle}>
      {prod ? (
        <>
          <img src={prod.imagen} alt={prod.nombre} />
          <h2>{prod.nombre}</h2>
          <p>Categoría: {prod.categoria}</p>
          <p>Precio: ${prod.precio}</p>
          <p>Stock: {prod.stock}</p>
          <p>{prod.descripcion}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ProductosNacionalesDetalle;