import {
  Meat,
  Seasoning,
  Vegetable,
} from "@/app/start/_components/common-ingredients/types";
import { create } from "zustand";

type FoodStore = {
  cuisineType: string;
  vegetables: Vegetable[];
  proteins: Meat[];
  seasonings: Seasoning[];
  changeCuisineType: (cuisineType: string) => void;
  addVegetable: (vegetable: Vegetable) => void;
  addProtein: (protein: Meat) => void;
  addSeasoning: (seasoning: Seasoning) => void;
  removeVegetable: (vegetable: Vegetable) => void;
  removeProtein: (protein: Meat) => void;
  removeSeasoning: (seasoning: Seasoning) => void;
};

export const useFoodStore = create<FoodStore>()((set, get) => ({
  proteins: [],
  vegetables: [],
  seasonings: [],
  cuisineType: "Dinner",
  changeCuisineType: (cuisineType: string) => set({ cuisineType }),
  addVegetable: (vegetable: Vegetable) =>
    set({ vegetables: [...get().vegetables, vegetable] }),
  addProtein: (protein: Meat) =>
    set({ proteins: [...get().proteins, protein] }),
  addSeasoning: (seasoning: Seasoning) =>
    set({ seasonings: [...get().seasonings, seasoning] }),
  removeVegetable: (vegetable: Vegetable) =>
    set({ vegetables: get().vegetables.filter((item) => item !== vegetable) }),
  removeProtein: (protein: Meat) =>
    set({ proteins: get().proteins.filter((item) => item !== protein) }),
  removeSeasoning: (seasoning: Seasoning) =>
    set({ seasonings: get().seasonings.filter((item) => item !== seasoning) }),
}));
