import { Carousel, IconButton } from "@material-tailwind/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function DealsCarousel() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="text-center bg-tempcolor py-4"
      navigation={false}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-1/3 sm:top-2/4 !left-5 md:!left-20 -translate-y-2/4"
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-1/3 sm:top-2/4 !right-3 md:!right-10 -translate-y-2/4"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    >
      <article>
        <h2>Get your order right now</h2>
        <p className="text-xs underline font-black my-2">
          Store Pickup Around You
        </p>
      </article>
      <article>
        <h2>Luv me {"som'"} free</h2>
        <p className="text-xs underline font-black my-2">
          Free shipping until 2099!
        </p>
      </article>
      <article>
        <h2>Buy One and Get One Free until Tommorrow</h2>
        <p className="text-xs underline font-black my-2">
          Use CODE {"'HAVEITYOURWAY'"} at checkout
        </p>
      </article>
    </Carousel>
  );
}


