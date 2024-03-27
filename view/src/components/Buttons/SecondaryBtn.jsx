/* eslint-disable react/prop-types */
export default function SecondaryBtn({ btn_text, width}) {
  return (
    <button
      className={`${
        width === "full" ? "w-full" : "w-36"
      } h-12 bg-black text-white text-sm text-center font-black p-2"`}
    >
      {btn_text}
    </button>
  );
}
