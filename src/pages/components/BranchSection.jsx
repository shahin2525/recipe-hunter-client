import React from "react";

const BranchSection = () => {
  return (
    <div style={{ backgroundColor: "#F8F6F4" }} className="pb-6 px-4  md:px-14">
      {/* className="bg-red-100" */}
      <h1 className="text-center font-extrabold text-4xl pt-10 mb-7">
        Our Branches
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/db4zyS5/istockphoto-843610508-1024x1024.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: The Cafe Rio</h2>
            <p>Capacity: 200</p>
            <p>Address: Boat-road,Dhaka</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className=""
              src="https://i.ibb.co/nC7Lf3Y/istockphoto-478432824-1024x1024.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: The Cafe Rio</h2>
            <p>Capacity: 200</p>
            <p>Address: Boat-road,Dhaka</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/FV4xBsD/istockphoto-939051976-1024x1024.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: The Cafe Rio</h2>
            <p>Capacity: 200</p>
            <p>Address: Boat-road,Dhaka</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Reserve Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchSection;
