/* eslint-disable react/prop-types */
export default function ProductImagePreview({
  img_url,
  onClick,
  currentImageUrl,
}) {
  const isSelected = img_url === currentImageUrl;
  return (
    <div
      className={`w-36 h-25 md:h-36 bg-primary_grey rounded-md my-4 hover:cursor-pointer ${
        isSelected ? "border-black border-2" : ""
      }`}
      onClick={onClick}
    >
      <img src={img_url} alt="Preview of shoe to be added to cart" />
    </div>
  );
}
