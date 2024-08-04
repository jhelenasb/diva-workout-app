import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[3px] bg-white border-pink-500 border-solid duration-300 pinkShadow"
    >
      <p className="font-black text-black">{text}</p>
    </button>
  );
}
