/*Este componente ItemListContainer que carga 
y muestra un catálogo de productos.*/


import ItemList from './ItemList';
import estilos from './ItemListContainer.module.css';
import { useProductos } from '../../context/ProductosContext';
import Paginacion from '../Paginacion'

const ItemListContainer = () => {

  const {
    productos,
    cargando,
    paginaActual,
    totalPaginas,
    cargarPagina
  } = useProductos();

  if (cargando && productos.length === 0) {
    return (
      <div className={estilos.estadoWrapper}>
        <div className={estilos.spinner} aria-label="Cargando" />
        <p className={estilos.estadoTexto}>Cargando productos...</p>
      </div>
    );
  }
  console.log("Página:", paginaActual);
  console.log("Total páginas:", totalPaginas);
  console.log("Productos:", productos.length);

  console.log("Página:", paginaActual);
console.log("Total:", totalPaginas);
console.log("Cantidad:", productos.length);

  return (
    <main className={estilos.contenedor}>
      <header className={estilos.encabezado}>
        <h1 className={estilos.titulo}>Nuestros Productos</h1>
      </header>

      <ItemList productos={productos} />

      {/* Paginación limpia y reutilizable */}
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        cargarPagina={cargarPagina}
        cargando={cargando}
      />
    </main>
  );
};

export default ItemListContainer;