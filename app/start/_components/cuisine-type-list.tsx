"use client";
import { useState } from "react";
import CuisineTypeItem from "./cuisine-type-item";
import { cuisines } from "./cuisines/cuisins";
import { Cuisine } from "./cuisines/types";
import { useFoodStore } from "@/stores/food-store";

export default function CuisineTypeList() {
  const changeCuisineType = useFoodStore((state) => state.changeCuisineType);

  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(
    "Dinner"
  );

  const handleSelectCuisine = (cuisineName: string) => {
    setSelectedCuisine(cuisineName);
    changeCuisineType(cuisineName);
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
