import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Cart ({cartItems.length} items)
      </h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty 🛒</h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 mb-4 rounded-lg"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>₹ {item.price}</p>
            </div>

            <img
              className="w-24 h-24 rounded-lg object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                item.imageId
              }
              alt={item.name}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;