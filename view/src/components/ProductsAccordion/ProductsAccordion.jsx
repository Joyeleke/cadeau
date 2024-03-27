import { useState } from "react";
import ProductReviewCard from "../ProductReviewCard/ProductReviewCard";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function ProductsAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <section className="px-8 md:px-24 lg:px-36 py-8">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-mono text-black"
        >
          Reviews (595)
        </AccordionHeader>
        <AccordionBody>
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="font-mono text-black"
        >
          Description
        </AccordionHeader>
        <AccordionBody>
          These wide fit adidas shoes are crafted with a Cloudfoam midsole and
          cushioned sockliner for a light and springy feel. They are inspired by
          running shoes, but work just as well for juggling daily tasks as they
          do for jogging. Colors represent top-flight universities, while crisp
          leather has the perfect amount of sheen to make em a hands-down win.
          So lace up and show off that varsity spirit. Ya game?
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="font-mono text-black"
        >
          Shipping
        </AccordionHeader>
        <AccordionBody>
          Free standard shipping on orders $50+ and free 60-day returns for our
          special Members. Learn more. Return policy exclusions apply.
        </AccordionBody>
      </Accordion>
    </section>
  );
}
