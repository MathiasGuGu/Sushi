import { Dispatch } from "react";
import { SetStateAction } from "react";
import { Vegetable, Meat, Seasoning } from "./common-ingredients/types";

export default function IngredientItem({
  ingredient,
}: {
  ingredient: Vegetable | Meat | Seasoning;
  selectedIngredients: Vegetable[] | Meat[] | Seasoning[];
  setSelectedIngredients: Dispatch<
    SetStateAction<Vegetable[] | Meat[] | Seasoning[]>
  >;
}) {
  return (
    <button className="flex gap-2 items-center justify-center bg-white pl-4 pr-3 py-1 border border-slate-400/[.15] text-sm rounded-full">
      <p>{ingredient.name}</p>
      <p>+</p>
    </button>
  );
}
