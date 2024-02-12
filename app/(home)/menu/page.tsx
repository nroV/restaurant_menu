import { Metadata } from "next";
import MenuSectionFoods from "./components/menusection";

export type MenuItemTypes = {
  id: string;
  name: string;
  price: number;
  category_id: number;
  image_url: string;
};
export type CategoriesType = {
  id: string;
  name: string;
};
export const metadata: Metadata = {
  title: "Menu",
  description: "Nham Gganh Menu",
};
const fetchCategories = async () => {
  const res = await fetch("http://localhost:3001/categories", {
    cache: "default",
  });
  return res.json();
};
const fetchMenu = async () => {
  const res = await fetch("http://localhost:3001/data", {
    cache: "default",
  });
  return res.json();
};
const Home = async () => {
  return (
    <main className="col-span-12 lg:col-span-10 ">
      <header className="border-b-4 border-b-[#F1D5BB] w-fit my-9">
        <h2 className="text-black">Nham Chganh</h2>
      </header>
      <section>
        <MenuSectionFoods
          categorieslist={await fetchCategories()}
          menulists={await fetchMenu()}
        />
      </section>
    </main>
  );
};

export default Home;
