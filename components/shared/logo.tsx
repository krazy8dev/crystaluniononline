import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center font-bold">
      <h1 className="text-xl font-extrabold">Crystal Union </h1>
      <p className="text-xs">Trust Bank</p>
    </Link>
  );
}
