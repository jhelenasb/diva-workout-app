import React from "react";
import Button from "./Button";

export default function DivaGlow() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">IT'S TIME TO BECOME</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-pink-500">HER</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light mt-4">
        I acknowledge that I am{" "}
        <span className="text-pink-500 font-medium">now</span> her—my{" "}
        <span className="text-pink-500 font-medium">Highest Self</span>.
        Embracing the wisdom of Dr. Stacy Sims, an exercise physiologist and
        nutrition scientist specializing in women's health and fitness, I commit
        to a training journey tailored to my unique needs and life stages. I
        strive to achieve the{" "}
        <span className="text-pink-500 font-medium">body of my dreams</span>,
        while attracting my deepest desires and manifesting my highest
        potential. By focusing on the principles of optimal nutrition and
        exercise, I unlock the power within to elevate my health, performance,
        and overall well-being in this dimension.
      </p>

      <Button
        func={() => {
          window.location.href = "#creatrix";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
