import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="mx-auto mt-8 pb-8 mb-6
                 flex flex-col
                 border-b border-gray-500 border-solid
                 [&>*]:mx-auto"
    >
      <h1 className="text-2xl hover:text-slate-300">
        <Link href={"/"}>Nin del Sol</Link>
      </h1>
    </header>
  );
}
