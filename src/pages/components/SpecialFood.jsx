import React from "react";

const SpecialFood = () => {
  return (
    <div style={{ backgroundColor: "#F5EFE7" }} className="pb-6">
      <h1 className="text-center text-4xl font-bold pt-10 pb-6">
        Special Food
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/fv0LJGd/istockphoto-104704117-1024x1024.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body  mt-10 mb-10">
            <h2 className="card-title pb-1">Name: Sizling-Fish</h2>
            <p className="pb-1">Ingredient: Fish,Chilly,Oil</p>
            <p className="pb-1">Price: $5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/wWfKn2K/istockphoto-500466008-1024x1024.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body  mt-10 mb-10">
            <h2 className="card-title pb-1">Name: Sizling-Fish</h2>
            <p className="pb-1">Ingredient: Fish,Chilly,Oil</p>
            <p className="pb-1">Price: $5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/FbK1fR9/istockphoto-1081422898-1024x1024.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body  mt-10 mb-10">
            <h2 className="card-title pb-1">Name: Sizling-Fish</h2>
            <p className="pb-1">Ingredient: Fish,Chilly,Oil</p>
            <p className="pb-1">Price: $5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFood;
