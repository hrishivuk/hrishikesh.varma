import React from 'react'
import roundImage from "../../assets/images/round.png";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Introduction() {
  return (
    <section className="p-14 introScreen" id='home'>
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
    <div className="flex mt-6 gap-3 items-center justify-center">
          <a href="https://www.linkedin.com/in/hrishivuk/">
            <FaLinkedin className="text-3xl text-whitePrimary" />
          </a>
          <a href="mailto:officialhrishivuk@gmail.com">
            <MdEmail className="text-4xl text-whitePrimary" />
          </a>
          <a href="tel:08078419320">
            <FaPhoneSquareAlt className="text-3xl text-whitePrimary" />
          </a>
          <a href="https://github.com/hrishivuk">
            <FaGithubSquare className="text-3xl text-whitePrimary" />
          </a>
        </div>
    {/* <ScreenFitText /> */}
  </section>
  )
}

export default Introduction