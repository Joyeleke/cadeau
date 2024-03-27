import SponsorsCard from "../SponsorsCard/SponsorsCard";
import { SponsorsLogos } from "./SponsorLogoUrl";

export default function Sponsors() {
  return (
    <section className="py-12 px-16 text-center">
      <h1 className="text-3xl font-black my-8">Brands we have worked with</h1>
      <article className="flex flex-wrap justify-around m-12">
        {SponsorsLogos.map((url, index) => (
          <SponsorsCard key={index} logoUrl={url} />
        ))}
      </article>
    </section>
  );
}
