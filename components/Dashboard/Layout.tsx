"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Dashboard/nav";
import { useState } from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  LucideIcon,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
  List,
  Plus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const pages: {
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
}[] = [
  {
    title: "Home",
    label: "128",
    icon: Inbox,
    variant: "default",
    href: "/dashboard",
  },
  {
    title: "Challenges",
    label: "9",
    icon: File,
    variant: "ghost",
    children: [
      {
        title: "Challenges List",
        label: "19",
        icon: List,
        variant: "ghost",
        href: "/dashboard/challenges",
      },
      {
        title: "New Challenge",
        label: "",
        icon: Plus,
        variant: "ghost",
        href: "/dashboard/challenges/new",
      },
    ],
  },
  {
    title: "Users",
    label: "",
    icon: Send,
    variant: "ghost",
    href: "/dashboard/challenges",
  },
  {
    title: "Submissions",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
    href: "/dashboard/challenges",
  },
  {
    title: "Feedbacks",
    label: "",
    icon: Trash2,
    variant: "ghost",
    href: "/dashboard/challenges",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <div className="">
        <Nav links={pages} />
      </div>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
