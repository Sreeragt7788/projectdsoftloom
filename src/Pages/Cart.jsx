import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItems/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addItem, minusItem, removeItem, total, buyNow } =
    useContext(CartContext);

  const navigate = useNavigate();

  function handlePlaceOrder() {
    const result = buyNow();
    if (!result.success) return alert(result.message);
    navigate("/orderSuccess");
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded">

      {cart.length === 0 && (
        <div className="py-16 text-center text-gray-500">
          🛒 Your cart is empty
        </div>
      )}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          add={() => addItem(item.id)}
          minus={() => minusItem(item.id)}
          remove={() => removeItem(item.id)}
        />
      ))}

      {cart.length > 0 && (
        <>
          <div className="grid grid-cols-12 px-6 py-4 border-t bg-gray-50">
            <div className="col-span-7 font-semibold">TOTAL</div>
            <div className="col-span-5 text-right font-bold">
              ₹ {total}
            </div>
          </div>

          <div className="flex justify-end px-6 py-4">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
