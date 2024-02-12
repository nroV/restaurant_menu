/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import CategoryBar from "./categorybar";

import MenuItem from "./menuItem";
import { CategoriesType, MenuItemTypes } from "../page";
import { redirect, useRouter } from "next/navigation";

const MenuSectionFoods = ({
  menulists,
  categorieslist,
}: {
  menulists: MenuItemTypes[];
  categorieslist: CategoriesType[];
}) => {

  const menuRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuItemTypes[]>(menulists);
  const [categories, setCategories] =
    useState<CategoriesType[]>(categorieslist);
  const [active, setActive] = useState(categorieslist[0].id);


  const setActiveCategory = (id: any) => {
    const categoryElement = document.getElementById(id);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sections = document.querySelectorAll(".category");

      console.log(window.scrollY)

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop)
        if (window.scrollY + 138 >= sectionTop) {
          console.log('run')
          setActive(section.getAttribute("id"));
        }
      });
    });
  }, []);

  useEffect(() => {
    if (search) {
      setMenu((pre) =>
        pre.filter((menu) => {
          return menu.name.includes(search);
        })
      );
      const item = menu.filter((menu) => {
        return menu.name.includes(search);
      });

      if (item?.length > 0) {
        const categorylist = Array.from(
          new Set(item.map((cate) => cate.category_id))
        );
     

        setCategories((pre) =>
          pre.filter((category) => categorylist.includes(+category.id))
        );
        setActive(categorylist[0]+"");
      }


    }

    return () => {
      setMenu(menulists);
      setCategories(categorieslist);
    };
  }, [search]);


  return (
    <>
      <CategoryBar
        data={categories}
        active={active}
        setActive={setActiveCategory}
      />

      <div className="my-5">
        <input
          value={search ?? ""}
          onChange={onChangeText}
          type="text"
          placeholder="Search by Catgories / Items"
          className="w-full py-2 focus:ring-2 ring-offset-2 ring-[#F1D5BB] text-black !outline-none"
        />
      </div>

      {categories?.map((item, i) => {
        return (
          <div
            key={i}
            className="block sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 w-full justify-center gap-5 rounded-lg py-2 "
          >
            {menu?.length > 0 &&
              menu.filter((menuitem) => +item.id === menuitem.category_id)
                .length && (
                <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 mb-5 lg:mb-0">
                  <h3 className="text-black">{item?.name} </h3>
                </div>
              )}
            {menu.map((menu, index) => {
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
    </>
  );
};

export default MenuSectionFoods;
