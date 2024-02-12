"use client";
import React, { useState } from "react";
import { CategoriesType } from "../../../page";

const CategoryBar = ({
  data,
  active,
}: {
  data: CategoriesType[];
  active: string;
}) => {
  return (
    <nav className="text-black flex  sticky top-0 bg-white hover:cursor-pointer col-span-4 space-x-6 overflow-scroll">
      {data?.map((cate, index) => (
        <div
          className={`item p-1 hover:bg-slate-200 px-1 items-self-center border-b-4 px-96${
            active === cate.id && "border-b-4 border-orange-500 text-center bg-orange-200 px-5"
          }`}
          key={index}
        >
          {cate?.name}
        </div>
      ))}
    </nav>
  );
};

export default CategoryBar;
