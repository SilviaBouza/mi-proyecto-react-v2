import { createContext, useState, useEffect, useContext } from "react";
import { collection, query, orderBy, limit, getDocs, startAfter, doc, updateDoc, deleteDoc, addDoc, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase/config";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [ultimoDoc, setUltimoDoc] = useState(null);
  const [historialDocs, setHistorialDocs] = useState([null]); // Para volver atrás
  const [totalPaginas, setTotalPaginas] = useState(0);
  const [cargando, setCargando] = useState(false);

  const ITEMS_POR_PAGINA = 3;

  // Aca Obtenemos el total de productos para calcular las páginas
  const obtenerTotal = async () => {
    const snapshot = await getCountFromServer(collection(db, "productos-nacionales"));
    setTotalPaginas(Math.ceil(snapshot.data().count / ITEMS_POR_PAGINA));
  };

  // Aca cargamos una pagina especifica
  const cargarPagina = async (numeroPagina) => {
    setCargando(true);
    try {
      const consulta = query(
        collection(db, "productos-nacionales"),
        orderBy("nombre"), // Es obligatorio ordenar para paginar
        ...(numeroPagina > 1 && historialDocs[numeroPagina - 1] 
           ? [startAfter(historialDocs[numeroPagina - 1])] 
           : []),
        limit(ITEMS_POR_PAGINA)
      );

      const snapshot = await getDocs(consulta);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setProductos(data);
      setPaginaActual(numeroPagina);

      // Aca guardamos el ultimo para la siguiente pagina si no esta en el historial
      if (!historialDocs[numeroPagina]) {
        const nuevoHistorial = [...historialDocs];
        nuevoHistorial[numeroPagina] = snapshot.docs[snapshot.docs.length - 1];
        setHistorialDocs(nuevoHistorial);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCargando(false);
    }
  };

 useEffect(() => {
  const init = async () => {
    await obtenerTotal();
    await cargarPagina(1);
  };

  init();
}, []);

  // A Partir de aca tenemos las funciones del CRUD 
  const agregarProducto = async (nuevoProd) => {
    await addDoc(collection(db, "productos-nacionales"), nuevoProd);
    obtenerTotal(); // Refrescamos el total
  };

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, "productos-nacionales", id));
    obtenerTotal();
    cargarPagina(paginaActual);
  };

  const editarProducto = async (id, datosActualizados) => {
    const ref = doc(db, "productos-nacionales", id);
    await updateDoc(ref, datosActualizados);
    cargarPagina(paginaActual);
  };

  return (
    <ProductosContext.Provider value={{ 
      productos, cargando, paginaActual, totalPaginas, 
      cargarPagina, eliminarProducto, agregarProducto, editarProducto 
    }}>
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductos = () => useContext(ProductosContext);