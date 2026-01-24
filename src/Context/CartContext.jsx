import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { NotificationContext } from "./NotificationContext";


export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const {showSuccess,showError}=useContext(NotificationContext)
  //initialize sat  from localStorage (already product saved in localStorage so here NO API call)
  const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("itemsInCart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Invalid cart data in localStorage");
    localStorage.removeItem("itemsInCart");
    return [];
  }
});


  useEffect(()=>{
    localStorage.setItem('itemsInCart',JSON.stringify(cart))
  },[cart])

  
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
  
  function clearCart(){
    setCart([])
    localStorage.removeItem("itemsInCart")
  }

  
  function addItem(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    showSuccess("Product added to cart");
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
    showError("Product removed from cart");
    
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

    // setCart([]);
    return { success: true, message: "Order placed successfully 🎉" };
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        addItem,
        minusItem,
        removeItem,
        total,
        buyNow,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
