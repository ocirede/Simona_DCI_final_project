import React from 'react'

function CardSection({section}) {
    return (
        <section className=" mt-10 flex items-center justify-center text-xl">
          <div className=" flex justify-between p-2 w-full h-[140px] ml-2 mr-2  rounded-xl bg-slate-500 text-xl ">
            <span className="text-white">{section}</span>
            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
          </div>
        </section>
      );
}

export default CardSection