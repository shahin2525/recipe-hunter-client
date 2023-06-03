import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-rose-50 py-8">
      <div className="my-4 mx-auto pl-10">
        <h1 className="font-extrabold text-8xl mt-10">Food</h1>
        <h3 className="font-bold text-5xl">Recipe-Blog</h3>
        <ul className="bg-red-600 h-40 w-36 text-3xl pt-10 font-bold mt-10 list-disc">
          <li className=" h-8 w-56 ml-16 ">
            <span></span> Most Delicious
          </li>
          <li className=" h-8 w-56 ml-16 pt-3">Fastest Selling</li>
        </ul>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 font-bold text-3xl">
          <h2>Top Rated</h2>
          <Rating style={{ maxWidth: 180 }} value={5} readOnly />
        </div>
      </div>
      <div className="">
        <img
          style={{ height: "700px", width: "650px" }}
          className="rounded-xl mr-0 md:mr-14 pr-0 md:pr-10"
          src="https://i.ibb.co/3TbQZBq/istockphoto-614326544-1024x1024.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
