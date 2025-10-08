import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-20"
          src={review.image}
        ></img>
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] -z-10"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl tracking-wider capitalize">
          {review.name}
        </p>
      </div>
      <div className="text-center ">
        <p className="text-violet-400 uppercase text-sm">{review.job}</p>
      </div>
      <div className=" text-violet-400 mt-5 mx-auto">
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div className="text-center mt-4 text-slate-600">
        <p>{review.text}</p>
      </div>
      <div className=" text-violet-400 mt-5 mx-auto">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
};

export default Card;
