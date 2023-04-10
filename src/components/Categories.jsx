import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("category.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2">
      {categories.map((category) => (
        <div key={category.id}>
          <div className="my-container bg-gray-100 w-60 h-44 my-8 rounded-lg">
            <img className="mb-8" src={category.logo} alt="" />
            <p className="text-xl font-extrabold font-mono">{category.name}</p>
            <p>
              <small>{category.availableJobs}</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
