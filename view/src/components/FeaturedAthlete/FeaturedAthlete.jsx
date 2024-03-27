import FeaturedAthleteImage from "./chris-chow-BaNQ9bM3uns-unsplash.jpg";

export default function FeaturedAthlete() {
  return (
    <section className="text-center">
      <h2 className="text-xl font-bold my-4">
        This {"Week's"} Featured Athlete
      </h2>
      <h1 className="text-3xl font-black my-8">NFL First Round Prospect - Jariah McFlurry</h1>
      <img src={FeaturedAthleteImage} alt="picture of NFL prospect" className="w-full" />
    </section>
  );
}
