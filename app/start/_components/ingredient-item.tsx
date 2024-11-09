"use client";
import { useFoodStore } from "@/stores/food-store";
import { Vegetable, Meat, Seasoning, Dairy } from "./common-ingredients/types";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

export default function IngredientItem({
  ingredient,
  type,
}: {
  ingredient: Vegetable | Meat | Seasoning | Dairy;
  type: "vegetable" | "protein" | "seasoning" | "dairy";
}) {
  const {
    removeVegetable,
    removeProtein,
    removeSeasoning,
    addProtein,
    addVegetable,
    addSeasoning,
    vegetables,
    proteins,
    seasonings,
  } = useFoodStore((state) => state);

  const handleRemoveIngredient = () => {
    if (type === "vegetable") {
      removeVegetable(ingredient as Vegetable);
    } else if (type === "protein") {
      removeProtein(ingredient as Meat);
    } else if (type === "seasoning") {
      removeSeasoning(ingredient as Seasoning);
    }
  };

  const handleAddIngredient = () => {
    if (type === "vegetable") {
      if (vegetables.includes(ingredient as Vegetable)) {
        handleRemoveIngredient();
      } else {
        addVegetable(ingredient as Vegetable);
      }
    } else if (type === "protein") {
      if (proteins.includes(ingredient as Meat)) {
        handleRemoveIngredient();
      } else {
        addProtein(ingredient as Meat);
      }
    } else if (type === "seasoning") {
      if (seasonings.includes(ingredient as Seasoning)) {
        handleRemoveIngredient();
      } else {
        addSeasoning(ingredient as Seasoning);
      }
    }
  };

  const handleClick = () => {
    if (type === "vegetable") {
      handleAddIngredient();
    } else if (type === "protein") {
      handleAddIngredient();
    } else if (type === "seasoning") {
      handleAddIngredient();
    }
  };

  const isIngredientSelected = () => {
    switch (type) {
      case "vegetable":
        return vegetables.includes(ingredient as Vegetable);
      case "protein":
        return proteins.includes(ingredient as Meat);
      case "seasoning":
        return seasonings.includes(ingredient as Seasoning);
      //   case "dairy":
      //     return Dairies.includes(ingredient as Dairy);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn({
        ["flex gap-2 items-center h-fit justify-center bg-white pl-4 pr-3 py-1 border border-slate-400/[.15] text-sm rounded-full"]:
          true,
        ["bg-blue-50 border-blue-200"]: isIngredientSelected(),
      })}
    >
      <p>{ingredient.name}</p>
      {isIngredientSelected() ? (
        <Minus size={12} strokeWidth={1.5} />
      ) : (
        <Plus size={12} strokeWidth={1.5} />
      )}
    </button>
  );
}
