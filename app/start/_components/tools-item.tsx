import Image from "next/image";
import { Check } from "lucide-react";
type CuisineTypeItemProps = {
  title: string;
};

export default function ToolsItem({ title }: CuisineTypeItemProps) {
  return (
    <div className="flex gap-2 items-center text-muted-foreground">
      <Image
        src={`/${title.toLowerCase()}.svg`}
        width={40}
        height={40}
        alt={title}
      />
      {title}
      <Check size={20} strokeWidth={1.5} />
    </div>
  );
}
// Example of CuisineTypeItem
