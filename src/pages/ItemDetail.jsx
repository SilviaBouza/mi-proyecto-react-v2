import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import styles from "./ItemDetail.module.css";

const ItemDetail = () => {
  const { id } = useParams();

  const { agregarACarrito } = useCart();

  const [producto, setProducto] = useState(null);
  const [cargandoProducto, setCargandoProducto] = useState(true);

  const [opiniones, setOpiniones] = useState([]);
  const [cargandoOpiniones, setCargandoOpiniones] = useState(true);
  const [errorOpiniones, setErrorOpiniones] = useState(null);

  const [mensaje, setMensaje] = useState("");

  // ==========================
  // Cargar producto por ID
  // ==========================
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        setCargandoProducto(true);

        const productoRef = doc(db, "productos-nacionales", id);
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          setProducto({
            id: productoSnap.id,
            ...productoSnap.data(),
          });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProducto(null);
      } finally {
        setCargandoProducto(false);
      }
    };

    obtenerProducto();
  }, [id]);

  // ==========================
  // Cargar opiniones
  // ==========================
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

  // ==========================
  // Agregar al carrito
  // ==========================
  const agregarAlCarrito = () => {
    if (!producto) return;

    agregarACarrito(producto);

    setMensaje(`"${producto.nombre}" fue agregado al carrito.`);

    setTimeout(() => {
      setMensaje("");
    }, 2500);
  };

  // ==========================
  // Estado de carga
  // ==========================
  if (cargandoProducto) {
    return (
      <div className={styles.container}>
        <h2>Cargando producto...</h2>
      </div>
    );
  }

  // ==========================
  // Producto inexistente
  // ==========================
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

          <h1 className={styles.nombre}>
            {producto.nombre}
          </h1>

          <p className={styles.descripcion}>
            {producto.descripcion}
          </p>

          <div className={styles.precio}>
            <span className={styles.moneda}>ARS</span>
            ${Number(producto.precio).toLocaleString("es-AR")}
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