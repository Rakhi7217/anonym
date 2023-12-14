import React from "react";
import data from '../helper/Data';
const Patnership = () => {
  return (
    <div>
      <div className="w-full pt-20 flex flex-col justify-center items-center">
        <h1 className="text-[#DAD6EE] text-sm tracking-wide"> PARTNERSHIPS </h1>
        <div className="w-40 h-[1px] bg-[#A40A0A]"> </div>
        <h1 className="p-4 text-3xl font-bold tracking-wider"> Communities, Influencers and Companies </h1>
        <p className="text-sm p-3 text-[#918CA9] tracking-widest"> For cooperation and partnership please contact dev@anonymchain.live </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center pb-20">
        {
          data.map((items)=>(
              <img src={items.img} alt="x" className="partner-map flex w-[17rem] h-32"/>
          ))
        }
      </div>
    </div>
  );
};

export default Patnership;
