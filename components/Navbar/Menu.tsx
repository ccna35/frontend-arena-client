"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink>Challenges</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/team">
            <NavigationMenuLink>Submissions</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="py-2 px-4 bg-orange-400 rounded-md">
          <Link href="/profile">
            <NavigationMenuLink className="text-white">
              Premium
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
