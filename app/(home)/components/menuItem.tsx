import React from "react";
import { MenuItemTypes } from "../../../page";

const MenuItem = ({ item }: { item: MenuItemTypes }) => {
  return (
    <div className="text-black shadow-md  hover:bg-slate-200 space-y-3 duration-300 transition-all hover:cursor-pointer">
      <figure className="w-full">
        <img src={item?.image_url} alt="menu-food-card" />
      </figure>
      <div className=" p-3">
        <h3>{item?.name}</h3>
        <p>Description of the item</p>
        <p>{item?.category_id} </p>

        <div className="bottom ">
          <p className="mb-2 text-lg font-bold">$ {item?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
