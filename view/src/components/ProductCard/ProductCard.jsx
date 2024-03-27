/* eslint-disable react/prop-types */
export default function ProductCard({
  product_id,
  product_name,
  product_price,
  product_description,
  colors_available,
  isBestSeller,
  image_url,
}) {
  const url = "http://localhost:5173/products";

  return (
    <article
      onClick={() => {
        location.href = `${url}/${product_id}`;
      }}
      className="hover:cursor-pointer max-w-[16rem] sm:max-w-[24rem]"
    >
      <div className="flex flex-col bg-primary_grey w-[16rem] sm:w-[24rem] h-[16rem] sm:h-[24rem] relative">
        <img
          src={image_url}
          alt="Nike shoes image"
          className="mx-auto my-auto rounded-xl"
        />
        <p className="ml-10 bg-white w-12 h-8 text-center font-black absolute bottom-0">
          ${product_price}
        </p>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-2">{product_name}</h2>
      <h2>{product_description}</h2>
      <h2 className="text-sm">
        {" "}
        {colors_available} {colors_available > 1 ? "colors" : "color"}
        {isBestSeller ? ". Best seller" : ""}
      </h2>
    </article>
  );
}
