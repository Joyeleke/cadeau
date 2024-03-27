export default function CustomerProductDisplay() {
  return (
    <section className="px-12 md:px-24 lg:px-36 py-8">
      <h2 className="text-center text-3xl font-bold lg:text-left">
        How Others Are Wearing It
      </h2>
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8">
        <article className="my-8 self-center">
          <img
            src="https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/clem-onojeghuo-OuxPfti70I0-unsplash.jpg"
            alt=""
            className="w-80 h-80"
          />
          <p className="text-xl font-bold my-4">Brandon Davis</p>
        </article>
        <article className="my-8 self-center">
          <img
            src="https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/avat-fathiazar-qnyqVRg53u4-unsplash.jpg"
            alt=""
            className="w-80 h-80"
          />
          <p className="text-xl font-bold my-4">Germain Defeo</p>
        </article>
        <article className="my-8 self-center">
          <img
            src="https://ezxeabxdawiisodycekr.supabase.co/storage/v1/object/public/CadeauImages/errant-official-1EUAH8YoOYs-unsplash.jpg"
            alt=""
            className="w-80 h-80"
          />
          <p className="text-xl font-bold my-4">Devin Marasuka</p>
        </article>
      </div>
    </section>
  );
}
