import React, { useState } from "react";
import Circle from "./circle";
import Modal from "./modal";
import "./index.css";
import { AnimatePresence } from "framer-motion";

const types = {
  FRENCH: 1,
  CONTACT: 2,
  CAREER: 3,
  HOBBIES: 4,
};

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isAllActive, setIsAllActive] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const displayContent = (active, type) => {
    setIsActive(active ? type : false);
    setIsAllActive(active);

    if (!active) return;

    // display here
    if (type === types.FRENCH) {
      setTitle("I'm French and that's okay");
      setContent(
        <div className="flex flex-col space-y-2 sm:space-y-8 sm:text-lg font-medium">
          <p>I grew up in Brest, Brittany on the West coast of France.</p>
          <p>
            I can anticipate the most asked question so here is my answer: No, I
            don’t eat frogs or snails (or on very rare occasions).
          </p>
          <p>I used to be a food engineer in an ice cream factory.</p>
          <p>
            I moved to England in February 2019 as an au pair in a lovely family
            of Chorlton-Cum-Hardy, Manchester.
          </p>
          <p>
            Since then, I have learnt to like beans on toast and pies, to start
            a polite conversation by commenting the weather and I sometimes
            surprise myself by saying “It’s mint!”.
          </p>
        </div>
      );
    } else if (type === types.CAREER) {
      setTitle("Full Stack Developer");
      setContent(
        <div className="flex flex-col space-y-2 sm:space-y-8 sm:text-lg font-medium">
          <p>
            During the 2020 lockdown, I started to learn about coding and
            unexpectedly realised I liked it!
          </p>
          <p>
            I started my apprenticeship at Reach Studios Ltd in Sheffield in
            April 2021.
          </p>
          <p>
            Since then, I found myself enjoying dev jokes and dreaming about
            lines of code.
          </p>
          <p>
            I am mainly using React.js, Laravel with Livewire and Alpine.js,
            coupled with Tailwind CSS (please see my CV for more details).
          </p>
          <p>
            Alongside web development, I have a passion for web and graphic
            design. I have been enhancing my skills on Adobe XD and Figma.
          </p>
        </div>
      );
    } else if (type === types.CONTACT) {
      setTitle("If you want to say hi");
      setContent(
        <div className="flex flex-col space-y-2 sm:space-y-8 sm:text-lg font-medium">
          <p>Please contact me here:</p>
          <a className="text-darkGreen" href="mailto:lucile.vacquie@gmail.com">
            lucile.vacquie@gmail.com
          </a>
          <p>Or if you're a bit shy:</p>
          <div className="flex space-x-4 sm:space-x-8 text-lg sm:text-2xl">
            <a
              href="https://www.linkedin.com/in/lucile-vacqui%C3%A929/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-darkGreen"></i>
            </a>
            <a
              href="https://www.instagram.com/lucile_vcq/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram text-darkGreen"></i>
            </a>
            <a
              href="https://github.com/lucilevacquie"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-darkGreen"></i>
            </a>
            <a
              href="https://github.com/lucilevacquie"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-free-code-camp text-darkGreen"></i>
            </a>
          </div>
        </div>
      );
    } else if (type === types.HOBBIES) {
      setTitle("My Hobbies");
      setContent(
        <div className="flex flex-col space-y-2 sm:space-y-8 sm:text-lg font-medium">
          <p>
            When I am not working, I do everything else! It's mission impossible
            for me to stay still, except when there is a new season of the
            Witcher on Netflix.
          </p>
          <p>
            Gardening brings me peace and satisfaction, especially when my
            plants actually grow.
          </p>
          <p>
            I enjoy home staging, DIY and painting canvas to decorate my home.
            Charity shops and flee markets are Heaven for me, I love upcycling
            and try as much as I can to buy second hand.
          </p>
          <p></p>
          <p></p>
        </div>
      );
    }
  };

  return (
    <div className="m-0 p-0 bg-yellow font-body">
      <div className="relative h-screen w-screen bg-center bg-no-repeat bg-cover bg-[url('/public/img/background.svg')]">
        <div className="py-16 px-8 sm:p-16 flex justify-between h-full w-full">
          <div className="flex flex-col justify-between">
            <Circle
              icon="fa-croissant"
              delay={0}
              type={types.FRENCH}
              isActive={isActive === types.FRENCH}
              setIsActive={displayContent}
              isAllActive={isAllActive}
            />
            <Circle
              icon="fa-paper-plane"
              delay={1.2}
              type={types.CONTACT}
              isActive={isActive === types.CONTACT}
              setIsActive={displayContent}
              isAllActive={isAllActive}
            />
          </div>
          <div className="text-darkGreen text-xl pt-24 sm:pt-0 sm:text-3xl font-bold">
            Hi there, <br /> I'm Lucile
          </div>
          <div className="flex flex-col justify-between">
            <Circle
              icon="fa-square-terminal"
              delay={0.4}
              type={types.CAREER}
              isActive={isActive === types.CAREER}
              setIsActive={displayContent}
              isAllActive={isAllActive}
            />
            <Circle
              icon="fa-hand-holding-seedling"
              delay={0.8}
              type={types.HOBBIES}
              isActive={isActive === types.HOBBIES}
              setIsActive={displayContent}
              isAllActive={isAllActive}
            />
          </div>
        </div>
        <div className="absolute top-0 py-16 px-8 sm:p-16 flex justify-center items-center h-screen w-screen">
          <AnimatePresence>
            {isActive && (
              <Modal isActive={isActive} title={title} text={content} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
