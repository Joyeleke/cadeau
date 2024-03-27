import Banner from "../components/Banner/Banner";
import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import DailyOffers from "../components/DailyOffers/DailyOffers";
import FeaturedAthlete from "../components/FeaturedAthlete/FeaturedAthlete";
import Footer from "../components/Footer/Footer";
import NavOne from "../components/Nav/NavOne";
import PrimePicks from "../components/PrimePicks/PrimePicks";
import SignUpCTA from "../components/SignUpCTA/SignUpCTA";
import Sponsors from "../components/Sponsors/Sponsors";

export default function LandingPage() {
  return (
    <>
      <header className="font-mono">
        <NavOne  />
        <hr className="w-full h-0.5 bg-black border-0"/>
        <Banner />
      </header>
      <main className="font-mono">
        <PrimePicks />
        <FeaturedAthlete />
        <CompanyInfo />
        <Sponsors />
        <DailyOffers />
        <CustomerReviews />
        <SignUpCTA />
      </main>
      <Footer />
    </>
  );
}
