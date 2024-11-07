"use client";
import { useState } from "react";
import CuisineTypeItem from "./cuisine-type-item";
import { cuisines } from "./cuisines/cuisins";
import { Cuisine } from "./cuisines/types";

export default function CuisineTypeList() {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const handleSelectCuisine = (cuisineName: string) => {
    setSelectedCuisine(cuisineName);
  };
  return (
    <div className="flex items-center gap-12">
      {cuisines.map((cuisine: Cuisine) => (
        <CuisineTypeItem
          key={cuisine.name}
          title={cuisine.name}
          checked={selectedCuisine === cuisine.name}
          onChange={() => handleSelectCuisine(cuisine.name)}
        />
      ))}
    </div>
  );
}
