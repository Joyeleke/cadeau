/* eslint-disable react/prop-types */
export default function OrderProductCard({ product }) {
  return (
    <article className="my-8 flex">
      <div className="w-32 h-32 bg-primary_grey"></div>
      <div className="ml-8 mr-auto">
        <p>{product.name}</p>
        <p>Size: L</p>
        <p>Quantity: {product.quantity}</p>
      </div>
      <div>
        <p>${product.price * product.quantity}</p>
      </div>
    </article>
  );
}
