import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);

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