"use client";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div
      className="font-manrope bg-background"
    >
      <title>YakoWeb | Turn visitors into customers and website overwhelm into a distant memory.</title>
      <Navbar/>
      {/* Hero */}
      <section
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1
          className="text-[52px] font-bold text-center leading-[110%] bg-gradient-to-r from-[#523C79] via-black to-[#523C79] bg-clip-text text-transparent"
        >
          Custom websites<br/>built to convert
        </h1>
      </section>
    </div>
  );
}
