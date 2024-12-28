import React from "react";

type Props = {};

export default function Logo({ }: Props) {
  return (
    <div className="flex flex-row items-center space-x-3 cursor-pointer md:space-x-4">
      <img src="/images/logo.png" className="w-7" alt="logo" />

    </div>
  );
}
