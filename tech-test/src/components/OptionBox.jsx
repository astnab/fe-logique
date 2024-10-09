import React, { useState } from "react";

const OptionBox = () => {
  const [peopleCount, setPeopleCount] = useState("");
  const [cooking, setCooking] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <div className="max-w-md mx-8 md:mx-auto p-8 mt-10 lg:p-16 flex flex-col gap-6 border bg-white border-gray-300 rounded-lg shadow-md z-0">
      <h2 className="text-xl font-bold mb-4 text-center">
        <div className="text-primary">Your healthy catering</div>
        <div className="text-zinc-500">starts tonight with your meal plan!</div>
      </h2>

      <div>
        <label
          htmlFor="people"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          How many people are you cooking for?
        </label>
        <select
          id="people"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          className="block w-full p-2 text-xs border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none"
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="2">2 people</option>
          <option value="4">4 people</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cooking"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          What is your cooking style?
        </label>
        <select
          id="cooking"
          value={cooking}
          onChange={(e) => setCooking(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none text-xs"
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="vegetarian">Vegetarian</option>
          <option value="glutenfree">Gluten Free</option>
          <option value="lowcal">Low Calorie</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cuisine"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Choose your favorite cuisine!
        </label>
        <select
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-primary focus:outline-none text-xs"
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="asian">Asian cuisine</option>
          <option value="western">Western cuisine</option>
        </select>
      </div>

      <button className="bg-primary p-3 rounded-lg text-white font-semibold">
        Generate Plan
      </button>
    </div>
  );
};

export default OptionBox;
