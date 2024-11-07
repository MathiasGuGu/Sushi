"use client";

import { useFoodStore } from "@/stores/food-store";
import IngredientList from "./ingredient-list";

export default function Sidebar() {
  const cuisineType = useFoodStore((state) => state.cuisineType);
  const selectedProteins = useFoodStore((state) => state.proteins);
  const selectedVegetables = useFoodStore((state) => state.vegetables);
  const selectedSeasonings = useFoodStore((state) => state.seasonings);
  return (
    <section className="w-[35%] h-[calc(100vh-200px)] rounded-lg px-4 py-6 border border-zinc-200 fixed right-[5%] top-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-sm text-muted-foreground">Cuisine type</h2>
          <p className="text-xl font-semibold text-foreground">{cuisineType}</p>
        </div>
        <div className="w-full h-[1px] bg-zinc-200 rounded-lg"></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">
            Selected ingredients
          </h2>
          <IngredientList title="Vegetables" ingredients={selectedVegetables} />
          <IngredientList title="Proteins" ingredients={selectedProteins} />
          <IngredientList title="Seasonings" ingredients={selectedSeasonings} />
        </div>
        <div className="w-full h-[1px] bg-zinc-200 rounded-lg"></div>
      </div>
    </section>
  );
}
