import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // ➕ Agregar producto
  const agregarACarrito = (producto) => {
 
 
  setCarrito((carritoActual) => {
    const existe = carritoActual.find(
      (p) => p.id === producto.id
    );
    

    if (existe) {
      return carritoActual.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    }
     
    return [
      ...carritoActual,
      {
        ...producto,
        cantidad: 1,
        },
    ];
  });
};

  // ➕ Incrementar cantidad
  const incrementarCantidad = (id) => {
    setCarrito(
      carrito.map(prod =>
        prod.id === id
          ? { ...prod, cantidad: prod.cantidad + 1 }
          : prod
      )
    );
  };

  // ➖ Decrementar cantidad
  const decrementarCantidad = (id) => {
    setCarrito(
      carrito
        .map(prod =>
          prod.id === id
            ? { ...prod, cantidad: prod.cantidad - 1 }
            : prod
        )
        .filter(prod => prod.cantidad > 0)
    );
  };

  // ❌ Eliminar producto
  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter(prod => prod.id !== id)
    );
  };

  // 🗑 Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // 🔢 Cantidad total de productos
  const  obtenerCantidadTotal = () => {
    return carrito.reduce(
      (acc, prod) => acc + prod.cantidad,
      0
    );
  };

  // 💰 Total a pagar
  const obtenerPrecioTotal = () => {
    return carrito.reduce(
      (acc, prod) =>
        acc + prod.price * prod.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarACarrito,
        incrementarCantidad,
        decrementarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        obtenerCantidadTotal,
        obtenerPrecioTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};