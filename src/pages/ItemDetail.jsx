import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import { db } from '../firebase/config';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';


const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);

  const [opiniones, setOpiniones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setProducto(null);
          return;
        }

        const productoData = {
          id: docSnap.id,
          ...docSnap.data()
        };

        setProducto(productoData);

        const opinionesRef = collection(db, 'opiniones');

        const q = query(
          opinionesRef,
          where('productoId', '==', docSnap.id)
        );

        const opinionesSnap = await getDocs(q);

        const opinionesData = opinionesSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setOpiniones(opinionesData);

      } catch (error) {
        console.error(
          'Error al obtener datos:',
          error
        );
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    addToCart(producto);

    setMensaje(
      `${producto.nombre} fue agregado al carrito`
    );

    setTimeout(() => {
      setMensaje('');
    }, 2000);
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>{producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          maxWidth: '300px',
          display: 'block',
          marginBottom: '20px'
        }}
      />

      <p>
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <p>
        <strong>Categoría:</strong>{' '}
        {producto.categoria}
      </p>

      {producto.descripcion && (
        <p>{producto.descripcion}</p>
      )}

      {mensaje && (
        <div className="alert alert-success">
          {mensaje}
        </div>
      )}

      <button
        className="btn btn-primary mb-4"
        onClick={handleAgregarAlCarrito}
      >
        Agregar al carrito
      </button>

      <hr />

      <h3>Opiniones</h3>

      {opiniones.length === 0 ? (
        <p>
          Este producto todavía no tiene
          opiniones.
        </p>
      ) : (
        opiniones.map(opinion => (
          <div
            key={opinion.id}
            className="mb-3"
          >
            <strong>
              {opinion.clienteNombre}
            </strong>

            <p>⭐ {opinion.rating}/5</p>

            <p>{opinion.comentario}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default ItemDetail;

