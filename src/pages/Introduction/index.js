import React from 'react';
import roundImage from "../../assets/images/round.png";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLink from "../../components/SocialLink";

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
      {/* Information */}
      <div className="flex flex-col my-8 gap-2 justify-center items-center">
        <h1 className="text-whitePrimary gradient-text font-bold text-5xl">
          Hello, I'm Hrishi
        </h1>
        <h3 className="text-whitePrimary font-semibold text-3xl">
          Front End Developer | Code Enthusiast
        </h3>
      </div>
      {/* Social Links */}
      <div className="flex mt-6 gap-3 items-center justify-center">
        <SocialLink
          href="https://www.linkedin.com/in/hrishivuk/"
          icon={<FaLinkedin className="text-3xl text-whitePrimary" />}
        />
        <SocialLink
          href="mailto:officialhrishivuk@gmail.com"
          icon={<MdEmail className="text-4xl text-whitePrimary" />}
        />
        <SocialLink
          href="tel:08078419320"
          icon={<FaPhoneSquareAlt className="text-3xl text-whitePrimary" />}
        />
        <SocialLink
          href="https://github.com/hrishivuk"
          icon={<FaGithubSquare className="text-3xl text-whitePrimary" />}
        />
      </div>
    </section>
  );
}

export default Introduction;
