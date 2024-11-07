import { mockMeats } from "./_components/common-ingredients/mock-meats";
import { mockSeasonings } from "./_components/common-ingredients/mock-seasonings";
import { mockVegetables } from "./_components/common-ingredients/mock-vegetables";
import IngredientList from "./_components/ingredient-list";
import CuisineTypeList from "./_components/cuisine-type-list";

export default function Start() {
  return (
    <div className="w-screen h-[calc(100vh-120px)] px-[10%] py-12 flex flex-col gap-4">
      <section className="bg-white rounded-xl py-5 px-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-foreground">
            Select your cuisine 🍽️
          </h1>
          <p className="text-sm text-muted-foreground">
            Select the meal you want to cook.
          </p>
        </div>
        <CuisineTypeList />
      </section>
      <section className="bg-white rounded-xl py-5 px-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold text-foreground">
            Add common ingredients 🧅
          </h1>
          <p className="text-sm text-muted-foreground">
            Start by adding common ingredients from the list.
          </p>
        </div>
        <IngredientList title="Vegetables" ingredients={mockVegetables} />
        <IngredientList title="Proteins" ingredients={mockMeats} />
        <IngredientList title="Seasonings" ingredients={mockSeasonings} />
      </section>
    </div>
  );
}
