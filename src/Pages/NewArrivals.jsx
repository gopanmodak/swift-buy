import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewArrival from "../Components/NewArrival";

const NewArrivals = () => {
  const products = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-5">

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn btn-sm ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-outline"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <NewArrival key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
