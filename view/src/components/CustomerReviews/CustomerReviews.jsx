import CustomerReviewCard from "../CustomerReviewCard/CustomerReviewCard";
import { customersReviewsData } from "./CustomerReviewData";

export default function CustomerReviews() {
  return (
    <section className="px-8 md:px-16 py-12 md:py-24">
      <h1 className="text-3xl text-center font-black my-12">
        Our Customers Love our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
        {customersReviewsData.map((customer, index) => (
          <CustomerReviewCard
            key={index}
            name={customer.name}
            review={customer.review}
            profileUrl={customer.profileUrl}
          />
        ))}
      </div>
    </section>
  );
}
