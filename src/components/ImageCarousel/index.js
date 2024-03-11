import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from "../../assets/images/tshirts/greek_oversized2.jpg";
import image2 from "../../assets/images/tshirts/itachi1.jpg";
import image3 from "../../assets/images/tshirts/platinum_oversized2.jpg";
import image4 from "../../assets/images/tshirts/itachi2.jpg";

const ImageCarousel = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden "
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        {card.type === "image" && <img src={card.url} alt={card.title} />}
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {card.type === "text" && (
          <div className="text-left">
            <h2 className="text-whiteSecondary/50 font-bold text-3xl mb-3">
              {card.heading}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-whitePrimary text-lg flex gap-2">
                <span>◉</span>
                {card.point1}
              </p>
              <p className="text-whitePrimary text-lg flex gap-2">
                <span>◉</span>
                {card.point2}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;

const cards = [
  {
    type: "text",
    heading: "T shirt designs",
    point1: "Inspired from the latest trends of oversized Tshirts",
    point2: "Created using Adobe Photoshop",
    id: 5,
  },
  {
    type: "image",
    url: image1,
    title: "Title 1",
    id: 1,
  },
  {
    type: "image",
    url: image2,
    title: "Title 2",
    id: 2,
  },
  {
    type: "image",
    url: image3,
    title: "Title 3",
    id: 3,
  },
  {
    type: "image",
    url: image4,
    title: "Title 4",
    id: 4,
  },
];
