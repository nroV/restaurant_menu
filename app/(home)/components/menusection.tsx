/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useEffect, useRef, useState } from "react";
import CategoryBar from "./categorybar";
import { CategoriesType, MenuItemTypes } from "../../../page";
import MenuItem from "./menuItem";

const MenuSectionFoods = ({
  menulists,
  categories,
}: {
  menulists: MenuItemTypes[];
  categories: CategoriesType[];
}) => {
  //   const normalize = menulists.map((menu, index) => {
  //     return {
  //       ...menu,
  //       category_id: { id: menu?.category_id, name: categories[index]?.name },
  //     };
  //   });

  const [active, setActive] = useState(categories[0].id);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sections = document.querySelectorAll(".category");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY + 138 >= sectionTop) {
          setActive(section.getAttribute("id"));
        }
      });
    });
  }, []);

  return (
    <>
      <CategoryBar data={categories} active={active} />

      <div>
        <input
          type="text"
          placeholder="Search by Catgories / Items"
          className="w-full py-2 focus:ring-2 ring-offset-2 ring-[#F1D5BB] text-black !outline-none"
        />
      </div>
      <div className="">
        {categories?.map((item, i) => {
          return (
            <div
              key={i}
              className="grid  grid-cols-4 w-full justify-center gap-5 rounded-lg py-2 "
            >
              <h3 className="text-black col-span-4">{item?.name} </h3>
              {menulists.map((menu, index) => {
                if (Number(item?.id) === Number(menu.category_id)) {
                  return (
                    <div
                      className="category"
                      key={index}
                      ref={menuRef}
                      id={menu.category_id + ""}
                    >
                      <MenuItem item={menu} />;
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuSectionFoods;
