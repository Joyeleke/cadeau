// eslint-disable-next-line react/prop-types
export default function CustomerReviewCard({ name, review, profileUrl }) {
  return (
    <article className=" grid grid-cols-5 p-6 border-black border-2 rounded-md">
      <img
        src={profileUrl}
        alt="customer profile picture"
        className="w-20 h-20 rounded-full"
      />
      <div className="col-span-4">
        <p>{review}</p>
        <p className="my-4 text-xl font-black">{name}</p>
      </div>
    </article>
  );
}
