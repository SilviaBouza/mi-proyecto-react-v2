import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// Hook para usar el contexto más fácil
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Agregar producto
  const addToCart = (producto) => {
    const existe = cart.find(p => p.id === producto.id);

    if (existe) {
      const actualizado = cart.map(p =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
      setCart(actualizado);
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
    }
  };

  // 🔢 Cantidad total de productos
  const getTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};