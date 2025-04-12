"use client";

import * as React from "react";
import {
  Command,
  Frame,
  Map,
  PieChart,
  Mail,
  Bot,
  User,
  Settings,
} from "lucide-react";

import { NavNewsletter } from "./nav-newsletter";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  newsletter: [
    {
      name: "Email",
      url: "email",
      icon: Mail,
    },
    {
      name: "User",
      url: "user",
      icon: User,
    },
    {
      name: "Newsletter page",
      url: "email",
      icon: Bot,
    },
    {
      name: "Setting",
      url: "email",
      icon: Settings,
    },
  ],
};

export function AppSidebar({
  type,
  ...props
}: {
  type: "dasboard" | "newsletter";
}) {
  return (
    <Sidebar variant="sidebar" {...props} className="border-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Stack Mail</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {type === "dasboard" ? (
          <NavProjects projects={data.projects} />
        ) : (
          <NavNewsletter newsletter={data.newsletter} />
        )}
      </SidebarContent>

      {type === "dasboard" && (
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
