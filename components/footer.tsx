import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-10 mb-3 pt-2.5">
      <div className="font-thin text-xs text-center w-fit mx-auto">
        Amb{" "}
        <div className="relative w-2 h-2 inline-block">
          <Image
            src="/img/heart-thin.svg"
            alt="heart"
            fill={true}
            className="m-auto"
          />
        </div>{" "}
        des de Catalunya i Mallorca
      </div>
    </footer>
  );
}
