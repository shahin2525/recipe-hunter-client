import React, { useEffect, useState } from "react";
import ChefsSectionCard from "./chefsSectionCard";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#FCE9F1" }}>
      <h1 className=" pt-10 pb-4 text-center font-extrabold text-3xl">
        Chef-Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-rose-150 pt-4 pb-8 pl-0 md:pl-10 pr-3 md:pr-10">
        {chefs.map((chef) => (
          <ChefsSectionCard key={chef.id} chef={chef}></ChefsSectionCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
