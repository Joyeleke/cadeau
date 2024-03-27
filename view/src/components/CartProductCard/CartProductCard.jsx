import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

/* eslint-disable react/prop-types */
export default function CartProductCard({ product, onClick }) {
  return (
    <article className="my-8 flex">
      <div className="w-32 h-32 bg-primary_grey"></div>
      <div className="ml-8 mr-auto">
        <p>{product.name}</p>
        <p>Size: L</p>
        <p>Quantity: {product.quantity}</p>
        <div className="flex items-center my-6">
          <RemoveShoppingCartIcon onClick={() => onClick(product.id)} />
        </div>
      </div> 
      <div>
        <p>${product.price * product.quantity}</p>
      </div>
    </article>
  );
}
