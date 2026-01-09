import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  
  function addToCart(item) {
    setCart((prev) => {
      const exist = prev.find((product) => product.id === item.id);

      if (exist) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }

  
  function addItem(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  
  function minusItem(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

 
  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ).toFixed(2);
  }, [cart]);

 
  function buyNow() {
    if (cart.length === 0) {
      return { success: false, message: "Your cart is empty" };
    }

    setCart([]);
    return { success: true, message: "Order placed successfully 🎉" };
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addItem,
        minusItem,
        removeItem,
        total,
        buyNow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
