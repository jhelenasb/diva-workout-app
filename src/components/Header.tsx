import React from "react";

export default function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex items-center justify-center gap-2">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-400">
          {index}
        </p>
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-700">
          {title}
        </h4>
      </div>
      <p className="text-base sm:text-lg mx-auto text-white-700">
        {description}
      </p>
    </div>
  );
}
