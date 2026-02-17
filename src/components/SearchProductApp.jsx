import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchProductApp = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const searchAction = async () => {
    if (inputValue.trim() === "") return;
    navigate(`/buscar/${inputValue}`);
  };

  return (
    <div className="my-5 flex gap-2 px-4">
      <input
        type="text"
        name=""
        id=""
        className="border-2 border-gray-300 rounded-md p-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-green-500 rounded-md p-2 text-emerald-50"
        onClick={searchAction}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchProductApp;
