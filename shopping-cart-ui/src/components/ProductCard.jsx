import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"></img>
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-grey-500 text-sm mb-2">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-orange-400 text-white mt-3 px-4 py-2 cursor-pointer rounded transition hover:bg-orange-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
