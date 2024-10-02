import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((i) => i.id === item.id);
    if (existingItemIndex >= 0) {
      const updatedCart = cart.map((i, index) =>
        index === existingItemIndex
          ? { ...i, quantity: (i.quantity || 0) + (item.quantity || 1) }
          : i
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: item.quantity || 1 }]);
    }
  };

  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const newQuantity = (item.quantity || 1) - 1;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  useEffect(() => {
    const totalOperation = cart.reduce(
      (acc, item) =>
        acc +
        (parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 0),
      0
    );
    setTotal(totalOperation);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        handleIncrease,
        handleDecrease,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
