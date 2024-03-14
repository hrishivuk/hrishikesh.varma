import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SkillsGrid = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto h-screen" id="about">
      <div>
        <div>
          <h1 className="text-whitePrimary font-bold text-5xl mb-4">
            About Me
          </h1>
          <div className="flex">
            <div className="flex flex-col gap-5">
              <p className="text-xl text-whitePrimary">
                I'm a passionate Front End Developer based in Kochi. With a keen
                eye for detail and a love for all things code, I specialize in
                crafting seamless and captivating Web Apps .
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-whitePrimary font-bold text-5xl mb-4 mt-16">
            What do i do?
          </h1>
          <div className="flex">
            <div className="flex flex-col gap-5">
              <p className="text-xl text-whitePrimary">
                👨‍💻 Front End Developer at Experion Technologies, Kerala, India 🔧
              </p>
              <p className="text-xl text-whitePrimary">
                🌴 Specializing in React and Angular 🚀
              </p>
              <p className="text-xl text-whitePrimary">
                🎨 Passionate about graphics design in my free time 🎨
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <h1 className="text-whitePrimary font-bold text-5xl mb-4 mt-16">
            Skills
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-xl text-whitePrimary">⚡ HTML,CSS, JS</p>
            <p className="text-xl text-whitePrimary">⚡React, Angular</p>
            <p className="text-xl text-whitePrimary">⚡ Tailwind CSS</p>
          </div>
        </div> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
  },
  {
    id: 2,
    src: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 5,
    src: "https://angular.io/assets/images/logos/angular/angular.png",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png",
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
  },
  {
    id: 8,
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    id: 9,
    src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    id: 10,
    src: "https://static.vecteezy.com/system/resources/previews/032/050/116/original/figma-3d-icon-free-png.png",
  },
  {
    id: 11,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
  },
  {
    id: 12,
    src: "https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
  },
  {
    id: 13,
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
  {
    id: 14,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/2048px-Accessibility.svg.png",
  },
  {
    id: 15,
    src: "https://mui.com/static/logo.png",
  },
  {
    id: 16,
    src: "https://i0.wp.com/webdevpuneet.com/wp-content/uploads/2020/05/responsive-web-design-icon-3.png?fit=837%2C679&ssl=1",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-4 bg-whitePrimary/40 p-4 rounded-md">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default SkillsGrid;
