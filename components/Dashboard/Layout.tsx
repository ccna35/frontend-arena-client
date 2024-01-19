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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const pages: {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
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
    href: "/dashboard/challenges",
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const defaultLayout = [265, 440, 655];

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={4}
          minSize={15}
          maxSize={20}
          className={cn("py-8", {
            "min-w-[50px] transition-all duration-300 ease-in-out": isCollapsed,
          })}
        >
          <Nav isCollapsed={isCollapsed} links={pages} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default Layout;
