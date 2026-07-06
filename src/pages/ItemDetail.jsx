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

export default ItemDetail;*/

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useProductos } from "../context/ProductosContext";
import { useCart } from "../context/CartContext";
import styles from "./ItemDetail.module.css";

const ItemDetail = () => {
  const { id } = useParams();

  const { productos } = useProductos();
  const { addToCart } = useCart();

  const producto = productos.find((p) => p.id === id);

  const [opiniones, setOpiniones] = useState([]);
  const [cargandoOpiniones, setCargandoOpiniones] = useState(true);
  const [errorOpiniones, setErrorOpiniones] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setCargandoOpiniones(true);
    setErrorOpiniones(null);

    const consulta = query(
      collection(db, "opiniones"),
      where("productoId", "==", id)
    );

    const unsubscribe = onSnapshot(
      consulta,
      (snapshot) => {
        const datos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOpiniones(datos);
        setCargandoOpiniones(false);
      },
      (error) => {
        console.error(error);
        setErrorOpiniones("No fue posible cargar las opiniones.");
        setCargandoOpiniones(false);
      }
    );

    return () => unsubscribe();
  }, [id]);

  const agregarAlCarrito = () => {
    if (!producto) return;

    addToCart(producto);

    setMensaje(`"${producto.nombre}" fue agregado al carrito.`);

    setTimeout(() => {
      setMensaje("");
    }, 2500);
  };

  if (!producto) {
    return (
      <div className={styles.container}>
        <h2>Producto no encontrado.</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          {producto.imagen && (
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className={styles.imagen}
            />
          )}
        </div>

        <div className={styles.infoBox}>
          {producto.categoria && (
            <span className={styles.categoriaBadge}>
              {producto.categoria}
            </span>
          )}

          <h1 className={styles.nombre}>{producto.nombre}</h1>

          <p className={styles.descripcion}>
            {producto.descripcion}
          </p>

          <div className={styles.precio}>
            <span className={styles.moneda}>ARS</span>
            ${producto.precio}
          </div>

          <div className={styles.stockWrapper}>
            {producto.stock > 0 ? (
              <p className={styles.stockDisponible}>
                <strong>Stock:</strong> {producto.stock} unidades
              </p>
            ) : (
              <p className={styles.stockAgotado}>
                Sin stock disponible
              </p>
            )}
          </div>

          {mensaje && (
            <div className={styles.mensajeCarrito}>
              {mensaje}
            </div>
          )}

          <button
            onClick={agregarAlCarrito}
            className={styles.btnCarrito}
            disabled={producto.stock <= 0}
          >
            {producto.stock > 0
              ? "Añadir al carrito"
              : "Agotado"}
          </button>
        </div>
      </main>

      <section className={styles.opinionesSection}>
        <h2 className={styles.opinionesTitle}>
          Opiniones de la comunidad
        </h2>

        {cargandoOpiniones ? (
          <div className={styles.cargandoOpinionesBox}>
            <p>Cargando opiniones...</p>
          </div>
        ) : errorOpiniones ? (
          <p>{errorOpiniones}</p>
        ) : opiniones.length === 0 ? (
          <p style={{ color: "var(--clr-muted)" }}>
            Aún no hay reseñas para este producto.
          </p>
        ) : (
          opiniones.map((opinion) => (
            <div
              key={opinion.id}
              className={styles.opinionCard}
            >
              <strong className={styles.clienteNombre}>
                {opinion.clienteNombre}
              </strong>

              <p>{opinion.comentario}</p>

              <span className={styles.rating}>
                ⭐ {opinion.rating}/5
              </span>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ItemDetail;