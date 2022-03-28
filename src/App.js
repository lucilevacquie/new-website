import React from "react";
import Circle from "./circle";
import "./index.css";

function App() {
  return (
    <div className="m-0 p-0 bg-yellow">
      <div className="h-screen w-screen bg-center bg-no-repeat bg-cover bg-[url('/public/img/background.svg')]">
        <div className="p-16 flex justify-between h-full w-full">
          <div className="flex flex-col justify-between">
            <Circle icon="fa-croissant" delay={0} />
            <Circle icon="fa-paper-plane" delay={1.2} />
          </div>
          <div className="text-darkGreen text-3xl font-bold">
            Hi there, <br /> I'm Lucile
          </div>
          <div className="flex flex-col justify-between">
            <Circle icon="fa-square-terminal" delay={0.4} />
            <Circle icon="fa-hand-holding-seedling" delay={0.8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
