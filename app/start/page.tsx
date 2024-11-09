import { mockMeats } from "./_components/common-ingredients/mock-meats";
import { mockSeasonings } from "./_components/common-ingredients/mock-seasonings";
import { mockVegetables } from "./_components/common-ingredients/mock-vegetables";
import IngredientList from "./_components/ingredient-list";
import CuisineTypeList from "./_components/cuisine-type-list";
import Sidebar from "./_components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCarbohydrates } from "./_components/common-ingredients/mock-carbohydrates";
import ToolsList from "./_components/tools-list";
import { Dairies } from "./_components/common-ingredients/mock-dairies";

export default function Start() {
  return (
    <div className="w-screen h-auto  px-[10%] py-12 flex gap-12 relative">
      <div className="flex flex-col gap-12 w-[80%]">
        {/* Introduction to Sushi */}
        <section className="bg-white rounded-xl  flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold text-foreground">
              Start creating your meal 🍣
            </h1>
          </div>
        </section>

        {/* Select your tools */}
        <section className="bg-white rounded-xl  flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-foreground">
              Select your tools 🍳
            </h1>
            <p className="text-sm text-muted-foreground">
              Select the tools you can use at home.
            </p>
          </div>
          <ToolsList />
        </section>

        {/* Select your cuisine */}
        <section className="bg-white rounded-xl  flex flex-col gap-4">
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

        {/* Add common ingredients */}
        <section className="bg-white rounded-xl flex flex-col gap-4 min-h-[400px]">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-foreground">
              Add common ingredients 🧅
            </h1>
            <p className="text-sm text-muted-foreground">
              Start by adding common ingredients from the list.
            </p>
          </div>

          <Tabs defaultValue="vegetables" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="vegetables" className="flex-grow">
                Vegetables
              </TabsTrigger>
              <TabsTrigger value="proteins" className="flex-grow">
                Proteins
              </TabsTrigger>
              <TabsTrigger value="carbohydrates" className="flex-grow">
                Carbohydrates
              </TabsTrigger>
              <TabsTrigger value="dairy" className="flex-grow">
                Dairy
              </TabsTrigger>
              <TabsTrigger value="seasoning" className="flex-grow">
                Seasoning
              </TabsTrigger>
            </TabsList>
            <TabsContent value="vegetables">
              <IngredientList
                type="vegetable"
                title="Click to add vegetables"
                ingredients={mockVegetables}
              />
            </TabsContent>
            <TabsContent value="proteins">
              <IngredientList
                type="protein"
                title="Click to add proteins"
                ingredients={mockMeats}
              />
            </TabsContent>
            <TabsContent value="carbohydrates">
              <IngredientList
                type="protein"
                title="Click to add carbohydrates"
                ingredients={mockCarbohydrates}
              />
            </TabsContent>
            <TabsContent value="dairy">
              <IngredientList
                type="dairy"
                title="Click to add dairy"
                ingredients={Dairies}
              />
            </TabsContent>
            <TabsContent value="seasoning">
              <IngredientList
                type="seasoning"
                title="Click to add seasonings"
                ingredients={mockSeasonings}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Add custom ingredients */}
        <section className="bg-white rounded-xl flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold text-foreground">
              Add custom ingredients 🍓
            </h1>
            <p className="text-sm text-muted-foreground">
              Add your own ingredients. Add as up to 15 ingredients. Ingredients
              should be comma seperated.
            </p>
          </div>
        </section>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}
