"use client";

import { useState } from "react";
import { Vegetable, Meat, Seasoning } from "./common-ingredients/types";
import IngredientItem from "./ingredient-item";

export default function IngredientList({
  ingredients,
  title,
}: {
  ingredients: Vegetable[] | Meat[] | Seasoning[];
  title: string;
}) {
  const [selectedIngredients, setSelectedIngredients] = useState<
    Vegetable[] | Meat[] | Seasoning[]
  >([]);
  return (
    <section className="w-full h-auto  rounded-lg">
      <div className="flex flex-col gap-1 px-2 py-2 w-full h-10 bg-white border rounded-t-lg border-zinc-100">
        <h2 className="text-sm text-muted-foreground">{title}</h2>
      </div>
      <div className="flex flex-wrap border border-t-0 border-dashed gap-3 px-2 py-2 rounded-lg rounded-t-none ">
        {ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.name}
            ingredient={ingredient}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        ))}
      </div>
    </section>
  );
}
