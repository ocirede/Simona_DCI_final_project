import React from "react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { AtSign } from "lucide-react";
import { X } from "lucide-react";
import { Copy } from "lucide-react";

function ShareLinkCard({ onClose }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[220px]  rounded-xl p-3 bg-slate-100 border-black  z-50 transition-transform duration-800">
      <div className=" flex justify-between">
        <h3 className=" text-xl font-bold">Profile sharing </h3>
        <X className=" cursor-pointer" onClick={onClose} />
      </div>
      <div className=" flex justify-between mt-5">
        <div className=" flex flex-col items-center">
          <Facebook className=" cursor-pointer" />
          <span>Facebook</span>
        </div>
        <div  className=" flex flex-col items-center">
          <Linkedin className=" cursor-pointer" />
          <span>Linkedin</span>

        </div>
        <div  className=" flex flex-col items-center">
          <Twitter className=" cursor-pointer" />
          <span>Twitter</span>

        </div>
        <div className=" flex flex-col items-center">
          <AtSign className=" cursor-pointer" />
          <span>E-mail</span>

        </div>
      </div>
      <hr className=" mt-3" />
      <div className="w-full mt-5">
        <label className="cursor-pointer">
          <span>Link copied</span>
        </label>
        <div className="flex justify-between mt-1 relative">
          <input type="text" className="border w-full h-8 pl-2" />
          <Copy className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ShareLinkCard;
