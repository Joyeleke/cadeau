/* eslint-disable react/prop-types */
export default function PrimaryBtn({ btn_text, width}) {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : "w-36"
      } h-12 bg-white text-black border-black border-2 text-sm text-center p-2`}
    >
      {btn_text}
    </button>
  );
}
