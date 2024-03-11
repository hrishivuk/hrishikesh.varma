import React from "react";
import Navigation from "../../components/Navigation";
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
      <BouncyCardsFeatures />
      <div className="flex w-full justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
