import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import spotifyImg from "../../assets/images/spotifyImg.png";
import recommended from "../../assets/images/rsongs.png";
import playlists from "../../assets/images/playslists.png";
import current from "../../assets/images/currentSong.png";
import image1 from "../../assets/images/tshirts/greek_oversized2.jpg";
import resume from "../../assets/images/resume.jpg";
import image2 from "../../assets/images/tshirts/itachi1.jpg";
import image3 from "../../assets/images/tshirts/platinum_oversized2.jpg";
import image4 from "../../assets/images/tshirts/itachi2.jpg";
import ContactForm from "../ContactForm";

export const BouncyCardsFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (image, content) => {
    setSelectedImage(image);
    setSelectedContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedContent(null);
    setIsOpen(false);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800" id="works">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-6 max-w-3xl overflow-hidden"
              style={{
                width: "80vw",
                maxWidth: "600px",
                maxHeight: "80vh",
                overflow: "auto",
                paddingTop:"25px"
              }} // Custom width styles
            >
              <div className="relative">
                <img src={selectedImage} alt="Selected" className="w-full" />
                <div className="mt-4">{selectedContent}</div>
                <button
                  onClick={closeModal}
                  className="absolute font-bold h-6 w-6 flex justify-center items-center top-2 right-2 p-2 bg-black rounded-full text-white"
                >
                  x
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-12 md:col-span-8"
          onClick={() =>
            openModal(
              spotifyImg,
              <div className="p-4">
                <h3 className="text-lg font-semibold">Spotify Rework</h3>
                <p className="text-sm">
                  Created a new look for spotify with plain HTML CSS JS. Also
                  implemented working features like recommended songs, playlists
                  and music control.
                </p>
                <div>
                  <p className="mt-4 text-xl font-semibold">
                    Deeper look into its features
                  </p>
                  <div className="flex flex-col gap-3">
                    <img src={current} alt="current Song" />
                    <img src={recommended} alt="current Song" />
                    <img src={playlists} alt="current Song" />
                  </div>
                </div>
              </div>
            )
          }
        >
          <CardTitle>Develop WebApps</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img className="" src={spotifyImg} alt="spotifyJS" />
          </div>
        </BounceCard>
        <BounceCard
          className="col-span-12 md:col-span-4"
          onClick={() =>
            openModal(
              image1,
              <div className="p-4">
                <h3 className="text-lg font-semibold">Side Hustles</h3>
                <p className="text-sm mb-4">
                  Take a look at some of my T-shirt designs that I have created
                  using Adobe Photoshop.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div className="image-hover-effect rounded-md">
                    <img src={image1} alt="tshirt design" />
                  </div>
                  <div className="image-hover-effect rounded-md">
                    <img src={image2} alt="tshirt design" />
                  </div>
                  <div className="image-hover-effect rounded-md">
                    <img src={image3} alt="tshirt design" />
                  </div>
                  <div className="image-hover-effect rounded-md">
                    <img src={image4} alt="tshirt design" />
                  </div>
                </div>
              </div>
            )
          }
        >
          <CardTitle>Side Hustles</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img className="" src={image1} alt="tshirt" />
          </div>
        </BounceCard>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard
          className="col-span-12 md:col-span-4"
          onClick={() => openModal(resume)}
        >
          <CardTitle>Resume</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img className="" src={resume} alt="resume" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Contact Me</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <ContactForm />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
