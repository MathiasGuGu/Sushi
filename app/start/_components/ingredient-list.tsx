"use client";

import { Vegetable, Meat, Seasoning, Dairy } from "./common-ingredients/types";
import IngredientItem from "./ingredient-item";

export default function IngredientList({
  ingredients,
  title,
  type,
}: {
  ingredients: Vegetable[] | Meat[] | Seasoning[] | Dairy[];
  title: string;
  type: "vegetable" | "protein" | "seasoning" | "dairy";
}) {
  return (
    <section className="w-full h-auto  rounded-lg">
      <div className="flex items-center justify-between gap-1 px-4 py-2 w-full h-10 bg-white border rounded-t-lg border-zinc-100">
        <h2 className="text-sm text-muted-foreground">{title}</h2>
        <div className=" text-muted-foreground text-xs ">clear all</div>
      </div>
      {ingredients.length === 0 ? (
        <div className="flex flex-wrap border border-t-0  border-dashed gap-3 px-4 py-4 rounded-lg rounded-t-none ">
          <p className="text-sm text-muted-foreground">
            No ingredients added yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap border border-t-0  border-dashed gap-3 px-4 py-4 rounded-lg rounded-t-none ">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.name}
              type={type}
              ingredient={ingredient}
            />
          ))}
        </div>
      )}
    </section>
  );
}
