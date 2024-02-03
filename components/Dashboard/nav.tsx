"use client";

import Link from "next/link";
import { ChevronDown, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

interface NavProps {
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href?: string;
    children?: {
      title: string;
      label?: string;
      icon: LucideIcon;
      variant: "default" | "ghost";
      href: string;
    }[];
  }[];
}

export function Nav({ links }: NavProps) {
  return (
    <div className="group flex flex-col gap-4 py-2">
      <nav className="grid gap-1 px-2">
        {links.map((link) => {
          return link.href ? (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "hover:text-white justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              <span>{link.title}</span>
            </Link>
          ) : (
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "sm" }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "w-full hover:text-white justify-start"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.title}</span>
                  <ChevronDown className="ml-auto" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {link.children?.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: link.variant, size: "sm" }),
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                        "ml-4 hover:text-white justify-start flex"
                      )}
                    >
                      <link.icon className="inline-block mr-2 h-4 w-4" />
                      <span className="inline-block">{link.title}</span>
                    </Link>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
}
