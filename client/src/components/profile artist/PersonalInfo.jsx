import React from "react";
import { Contact } from "lucide-react";
import { Share } from "lucide-react";
function PersonalInfo() {
  return (
    <section className="flex justify-center items-center  h-[130px] mt-2">
      {/* import { Contact } from 'lucide-react' ???*/}
      <button className=" flex items-center justify-center w-[80px] h-[40px] absolute left-12 top-[210px] rounded-xl bg-slate-500">
        <span className="text-white">Contact</span>
      </button>
      <label>
        <div className="bg-slate-500 w-28 h-28 rounded-full cursor-pointer absolute top-[160px] transform -translate-x-1/2 z-20">
          <input type="file" className="hidden" />
        </div>
      </label>
      {/* import { Share } from 'lucide-react'???*/}
      <button className=" flex items-center justify-center w-[80px] h-[40px] absolute right-12 top-[210px] rounded-xl bg-slate-500">
        <span className="text-white">Share Link</span>
      </button>
    </section>
  );
}

export default PersonalInfo;
