import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" flex h-screen flex-col ">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}
