/* eslint-disable react/prop-types */
export default function SponsorsCard({ logoUrl }) {
  return (
    <img src={logoUrl} alt={`A company Logo`} className="w-[8rem] h-[8rem]" />
  );
}
