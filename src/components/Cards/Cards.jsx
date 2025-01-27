/* eslint-disable no-undef */

import { useState } from "react";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const Cards = ({ recipe, handleClick }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCardClick = (item) => {
    console.log(item);
    if (!selectedItems.includes(item.recipe_id)) {
      handleClick(item);
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        item.recipe_id,
      ]);
      toast.success("You have selected item!");
    } else {
      toast.error("You have already selected item!");
    }
  };
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-5 p-4">
      {recipe.map((item) => (
        <div key={item.id}>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={item?.recipe_image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.recipe_name}</h2>
              <p className="text-[#150B2B99]">{item?.short_description}</p>
              <div className="divider"></div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold">Ingredients: 6</h1>
                {item.ingredients.map((ingredient) => (
                  <li className="text-[#282828CC]" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </div>
              <div className="divider"></div>
              <div className="flex gap-4 text-[#282828CC]">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p>{item.preparing_time}utes</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    />
                  </svg>
                  <p>{item.calories}</p>
                </div>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => handleCardClick(item)}
                  className="btn bg-[#0BE58A] rounded-full text-black mt-4"
                >
                  Want to Cook
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
