import { tools } from "./tools/tools";
import { Tool } from "./tools/types";
import ToolsItem from "./tools-item";
// import { useFoodStore } from "@/stores/food-store";

export default function ToolsList() {
  //   const changeCuisineType = useFoodStore((state) => state.changeCuisineType);

  return (
    <div className="flex items-center gap-12">
      {tools.map((tool: Tool) => (
        <ToolsItem key={tool.name} title={tool.name} />
      ))}
    </div>
  );
}
