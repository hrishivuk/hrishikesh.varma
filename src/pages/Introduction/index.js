import React from 'react'
import roundImage from "../../assets/images/round2.png";
import { ScreenFitText } from "../../components/ScreenFitText";
import ContactForm from '../../components/ContactForm';

function Introduction() {
  return (
    <section className="p-14 introScreen">
    {/* Image */}
    <div className="flex justify-center items-center ">
      <img
        src={roundImage}
        alt="Hrishi"
        className="h-60 w-60 bg-whiteSecondary rounded-full"
      />
    </div>
    <div className="flex flex-col my-8 gap-2 justify-center items-center">
      <h1 className="text-whitePrimary gradient-text font-bold text-5xl">
        Hello, I'm Hrishi
      </h1>
      <h3 className="text-whitePrimary font-semibold text-3xl">
        Front End Developer | Code Enthusiast
      </h3>
    </div>

    {/* <ScreenFitText /> */}
  </section>
  )
}

export default Introduction