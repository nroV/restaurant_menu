import Button from "@/app/components/Button";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
const About = () => {
  return (
    <div className="text-neutral-500  col-span-10 lg:flex my-16 space-y-10 lg:space-x-20 space-x-0 p-5 block">
      <div className="space-y-10 flex-1">
        <h3>Our Story & Services</h3>
        <h1>Our Culinary Journey And Services</h1>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <Button
          label="Contact Now"
          className="bg-[#F1D5BB] px-14 py-4 rounded-3xl font-semibold hover:bg-orange-200 duration-300 w-full md:w-auto"
        >Contact Now</Button>
      </div>

      <div className="lg:grid grid-cols-2 gap-3 flex-2 mx-28 bg-red block hidden">
        <div className="card bg-[#F1D5BB] shadow-sm py-10 px-5 rounded-3xl text-center
         hover:bg-orange-200 duration-300 ">
          <div className="justify-center flex  my-2">
            <MdEmail className="text-center" size={55} color="#F9B572" />
          </div>
          <h3>Email </h3>
          <p>example@email.com</p>
        </div>
        <div className="card bg-[#F1D5BB] shadow-sm py-10 px-5 rounded-3xl text-center hover:bg-orange-200 duration-300 ">
          <div className="justify-center flex items-center  my-2">
            <BsFillTelephoneFill className="" size={55} color="#F9B572" />
          </div>
          <h3>Telephone </h3>
          <p>+855 965689895</p>
        </div>
        <div className="card bg-[#F1D5BB] shadow-sm py-10 px-5 rounded-3xl text-center hover:bg-orange-200 duration-300 ">
          <div className="justify-center flex  my-2">
            <IoCart className="" size={55} color="#F9B572" />
          </div>
          <h3>Online Ordering </h3>
          <p>Fast and Easy </p>
        </div>
        <div className="card bg-[#F1D5BB] shadow-sm py-10 px-5 rounded-3xl text-center  hover:bg-orange-200 duration-300">
          <div className="justify-center flex my-2">
            <MdFoodBank className="" size={55} color="#F9B572"  />
          </div>
          <h3>Gift Cards </h3>
          <p>Give the gifts</p>
        </div>
      </div>
    </div>
  );
};

export default About;
