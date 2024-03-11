import React from "react";
import Navigation from "../../components/Navigation";
// import roundImage from "../../assets/images/round2.png";
// import styles from "../../components/DotGrid/bubble.module.css";
// import WaterDropGrid from "../../components/DotGrid";
// import ScrollDownIconForward from "../../components/ScrollDown";
// import ScrollDownIconBackward from "../../components/ScrollDown/index2";
// import { ScreenFitText } from "../../components/ScreenFitText";
import spotifyImg from "../../assets/images/spotifyImg.png";
import ImageCarousel from "../../components/ImageCarousel";
import SkillsGrid from "../../components/SkillsGrid";
import Introduction from "../Introduction";
import { BouncyCardsFeatures } from "../../components/BouncyCardFeatures";
import ContactForm from "../../components/ContactForm";

function Home() {
  return (
    <div className="flex flex-col w-full bg-blackPrimary px-20 py-5">
      <Navigation />

      {/* Content starts here */}
      <Introduction />
      <SkillsGrid />

      {/* <BubbleText /> */}
      {/* <WaterDropGrid /> */}
      <BouncyCardsFeatures />
      <div className="flex w-full justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;

// const BubbleText = () => {
//   return (
//     <h2 className="text-center text-6xl font-bold text-imageBackground">
//       {"CHECK THIS OUT".split("").map((child, idx) => (
//         <span className={styles.hoverText} key={idx}>
//           {child}
//         </span>
//       ))}
//     </h2>
//   );
// };
