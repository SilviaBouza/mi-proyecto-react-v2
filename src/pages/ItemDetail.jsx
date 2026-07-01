import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

<<<<<<< HEAD
import { db } from '../firebase/config';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';

=======
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);
<<<<<<< HEAD
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

/*import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);
        //console.log('ID del producto actual:', docSnap.id);
        const opinionesRef = collection(db, 'opiniones');

const opinionesSnap = await getDocs(opinionesRef);

const opinionesData = opinionesSnap.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));

//console.log('TODAS LAS OPINIONES:', opinionesData);
opinionesData.forEach(opinion => {
  //console.log('Opinión:', opinion);
  console.log(
  'productoId opinión:',
  opinion.productoId
);
});

console.log('ID producto actual:', docSnap.id);
        if (docSnap.exists()) {
          const productoData = {
            firestoreId: docSnap.id,
            ...docSnap.data()
          };

          setProducto(productoData);

          // Obtener opiniones relacionadas
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
          console.log('Opiniones encontradas:', opinionesData);

          setOpiniones(opinionesData);

        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [id]);

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
        <strong>Categoría:</strong> {producto.categoria}
      </p>

      {producto.descripcion && (
        <p>{producto.descripcion}</p>
      )}

      <button
        className="btn btn-primary mb-4"
        onClick={() => addToCart(producto)}
      >
        Agregar al carrito
      </button>

      <hr />

      <h3>Opiniones</h3>

      {opiniones.length === 0 ? (
        <p>Este producto todavía no tiene opiniones.</p>
      ) : (
        opiniones.map(opinion => (
          <div key={opinion.id} className="mb-3">
            <strong>{opinion.clienteNombre}</strong>

            <p>
              ⭐ {opinion.rating}/5
            </p>

            <p>{opinion.comentario}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default ItemDetail;*/
=======

  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find(p => p.id === parseInt(id));
        setProducto(encontrado);
      });
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>

       <button onClick={() => addToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
    
  );
};

export default ItemDetail;
>>>>>>> d15c7ce5e5e1859b4632feef2d67078239195ca4
