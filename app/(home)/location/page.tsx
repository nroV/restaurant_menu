import Button from "@/app/components/Button";
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import Link from "next/link";
const Location = () => {
  return (
    <div className="text-neutral-500  col-span-10 lg:grid grid-cols-2  gap-10 block md:px-0 px-5">
      <div className="space-y-7 my-20 col-span-1 ">
        <h1>Get In touch</h1>
        <p>
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>

        <Button
          label="See Map"
          className="bg-[#F1D5BB] py-4 rounded-3xl font-semibold hover:bg-orange-200 duration-300"
        >
          <Link
            className="px-14 py-4"
            target="_blank"
            href={
              "https://www.google.com/maps/dir//Dos+Mas+50+Circuit+Ave+Oak+Bluffs,+MA+02557/@41.4549782,-70.5585477,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89e52963ac45bbcb:0xf05e8d125e82af10"
            }
          > See map</Link>
         
        </Button>
      </div>

      <div className="lg:col-span-1 hidden lg:block ">
        <iframe
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          className="w-full h-full border-none"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
