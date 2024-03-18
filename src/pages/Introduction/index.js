import React from 'react';
import roundImage from "../../assets/images/profile.jpg";
import { FaLinkedin, FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLink from "../../components/SocialLink";

function Introduction() {
  return (
    <section className="p-6 md:p-14 introScreen" id='home'>
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={roundImage}
          alt="Hrishi"
          className="h-40 md:h-60 w-40 md:w-60 bg-whiteSecondary rounded-full"
        />
      </div>
      {/* Information */}
      <div className="flex flex-col my-4 md:my-8 gap-2 justify-center items-center">
        <h1 className="text-whitePrimary gradient-text font-bold text-3xl md:text-5xl text-center">
          Hello, I'm Hrishi
        </h1>
        <h3 className="text-whitePrimary font-semibold text-lg md:text-3xl text-center">
          Front End Developer | Code Enthusiast
        </h3>
      </div>
      {/* Social Links */}
      <div className="flex mt-4 md:mt-6 gap-3 items-center justify-center">
        <SocialLink
          href="https://www.linkedin.com/in/hrishivuk/"
          icon={<FaLinkedin className="text-xl md:text-3xl text-whitePrimary" />}
        />
        <SocialLink
          href="mailto:officialhrishivuk@gmail.com"
          icon={<MdEmail className="text-2xl md:text-4xl text-whitePrimary" />}
        />
        <SocialLink
          href="tel:08078419320"
          icon={<FaPhoneSquareAlt className="text-xl md:text-3xl text-whitePrimary" />}
        />
        <SocialLink
          href="https://github.com/hrishivuk"
          icon={<FaGithubSquare className="text-xl md:text-3xl text-whitePrimary" />}
        />
      </div>
    </section>
  );
}

export default Introduction;
