import React from "react";
import { Contact } from "lucide-react";
import { Share } from "lucide-react";
import { Camera } from "lucide-react";

function PersonalInfo() {
  return (
    <section className="flex justify-center items-center  h-[130px] mt-2  ">
      {/* import { Contact } from 'lucide-react' ???*/}
      <div className="absolute top-0 -left-8  sm:left-12 md:left-28 lg:left-56 ">
        <button className=" flex items-center justify-center w-[100px] h-[40px] absolute left-12 top-[210px] rounded-xl bg-slate-500">
          <span className="text-white">Contact me</span>
        </button>
      </div>
      <label>
        <div className="bg-slate-500 w-28 h-28 rounded-full cursor-pointer absolute top-[160px] transform -translate-x-1/2 z-20">
          <input type="file" className="hidden" />
          <Camera className=" absolute inset-y-10 right-10 w-8 h-8 " />
        </div>
      </label>
      {/* import { Share } from 'lucide-react'???*/}
      <div className="absolute top-0 -right-8  sm:right-12 md:right-28  lg:right-56">
        <button className=" flex items-center justify-center w-[100px] h-[40px] absolute right-12 top-[210px] rounded-xl bg-slate-500">
          <span className="text-white">Share Link</span>
        </button>
      </div>
    </section>
  );
}

export default PersonalInfo;
