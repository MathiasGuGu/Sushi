import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-20 flex items-center px-[10%] justify-between">
            <div className="flex gap-1 items-center">
                <div className="text-2xl">🍣</div>
                <h1 className="text-2xl font-serif font-medium tracking-[-0.14em]">SUSHI</h1>
           </div>
           <div className="flex items-center gap-2">
          </div>
        </div>
    );
}
