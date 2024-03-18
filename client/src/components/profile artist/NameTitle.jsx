import React from "react";

function NameTitle() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="absolute top-[260px] flex items-end justify-center w-[105px] h-[50px] rounded-xl ">
        <span className="text-black text-xl">Federico</span>
      </div>
      <div className="absolute top-[320px]  flex items-end">
        <button className="w-[100px] h-[40px] rounded-xl bg-slate-500">
          <span className="text-white">Add me</span>
        </button>
      </div>
    </section>
  );
}

export default NameTitle;

