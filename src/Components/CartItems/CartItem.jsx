function CartItem({ item, remove, add, minus }) {
  return (
    <div className="grid grid-cols-12 items-center px-6 py-4 bg-white border-b">

      <div className="col-span-2 flex justify-center">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16" />
      </div>

      <div className="col-span-4">
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm text-gray-500">{item.brand}</p>
      </div>

      <div className="col-span-2 text-right font-semibold text-green-600">
        ₹ {item.price}
      </div>

      <div className="col-span-2 flex items-center justify-center gap-3">
        <button onClick={minus} className="px-2 border">-</button>
        <span>{item.quantity}</span>
        <button onClick={add} className="px-2 border">+</button>
      </div>

      <div className="col-span-2 text-right">
        <button onClick={remove} className="text-red-500">
          Remove
        </button>
      </div>

    </div>
  );
}

export default CartItem;
