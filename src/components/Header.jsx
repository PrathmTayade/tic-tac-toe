import React from "react";
import Switcher from "./switcher";
export default function Header() {
  return (
    <header className=" relative  bg-blue-400  p-4 dark:bg-red-700">
      <div className="  text-center font-sans   text-4xl font-bold   text-slate-100  ">
        Tic tac Toe
      </div>
      <div className="absolute sm:right-4 right-1  top-1  inline-block p-4 ">
        <Switcher />
      </div>
    </header>
  );
}
