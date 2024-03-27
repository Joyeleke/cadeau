import BannerImage from "./jakob-owens-JzJSybPFb3s-unsplash (1) (1).jpg";

export default function Banner() {
  return (
    <div className="max-h-[52rem] overflow-clip">
      <img
        src={BannerImage}
        alt="man tossing up a shoe in bright sunlight"
        className="w-full"
      />
    </div>
  );
}
