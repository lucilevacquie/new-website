import React, { useState } from "react";
import Circle from "./circle";
import Modal from "./modal";
import "./index.css";

const types = {
  FRENCH: 1,
  CONTACT: 2,
  CAREER: 3,
  HOBBIES: 4,
};

function App() {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const displayContent = (active, type) => {
    setIsActive(active ? type : false);

    if (!active) return;

    // display here
    if (type === types.FRENCH) {
      setTitle("I'm French and that's okay");
      setContent("Some content here");
    } else if (type === types.CAREER) {
      setTitle("Software Engineer & Web Designer");
      setContent("Some content here");
    } else if (type === types.CONTACT) {
      setTitle("Contact me");
      setContent("Some content here");
    } else if (type === types.HOBBIES) {
      setTitle("My Hobbies");
      setContent("Some content here");
    }
  };

  return (
    <div className="m-0 p-0 bg-yellow">
      <div className="relative h-screen w-screen bg-center bg-no-repeat bg-cover bg-[url('/public/img/background.svg')]">
        <div className="p-16 flex justify-between h-full w-full">
          <div className="flex flex-col justify-between">
            <Circle
              icon="fa-croissant"
              delay={0}
              type={types.FRENCH}
              isActive={isActive === types.FRENCH}
              setIsActive={displayContent}
            />
            <Circle
              icon="fa-paper-plane"
              delay={1.2}
              type={types.CONTACT}
              isActive={isActive === types.CONTACT}
              setIsActive={displayContent}
            />
          </div>
          <div className="text-darkGreen text-3xl font-bold">
            Hi there, <br /> I'm Lucile
          </div>
          <div className="flex flex-col justify-between">
            <Circle
              icon="fa-square-terminal"
              delay={0.4}
              type={types.CAREER}
              isActive={isActive === types.CAREER}
              setIsActive={displayContent}
            />
            <Circle
              icon="fa-hand-holding-seedling"
              delay={0.8}
              type={types.HOBBIES}
              isActive={isActive === types.HOBBIES}
              setIsActive={displayContent}
            />
          </div>
        </div>
        <div className="absolute top-0 p-16 flex justify-center items-center h-screen w-screen">
          {isActive && (
            <Modal isActive={isActive} title={title} text={content} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
