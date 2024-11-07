import { Switch } from "@/components/ui/switch";
type CuisineTypeItemProps = {
  title: string;
  checked: boolean;
  onChange: () => void;
};

export default function CuisineTypeItem({
  title,
  checked,
  onChange,
}: CuisineTypeItemProps) {
  return (
    <div className="flex gap-3 items-center text-muted-foreground">
      <label htmlFor={`cuisine-${title}`}>{title}</label>
      <Switch checked={checked} onClick={onChange} id={`cuisine-${title}`} />
    </div>
  );
}
// Example of CuisineTypeItem
