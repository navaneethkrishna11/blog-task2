import React from 'react'
import { Calendar, Home, Inbox, Search, Settings, Bell, User,  Clock,CheckCircle,FileBarChart, } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import BlogMap from './_components/BlogMap'
import AddBlog from './_components/AddBlog'

// Menu items
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Pending",
    url: "#",
    icon: Clock,
  },
  {
    title: "Completed",
    url: "#",
    icon: CheckCircle,
  },
  {
    title: "Report",
    url: "#",
    icon: FileBarChart,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}  className="flex items-center gap-3 text-lg py-3">
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon size={22} />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-slate-900">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>

              <div className="flex items-center gap-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 p-2">
                          <NavigationMenuLink asChild>
                            <a href="#" className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              Profile
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              Settings
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                              Logout
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                  <Bell size={20} />
                </button>
                
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                  <User size={20} />
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className=" p-6 flex-1">
            <div className="mb-6 flex flex-row justify-between">
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <div>
              <AddBlog/>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Check whats happening with your projects today.</p>

            
            <BlogMap searchParams={{}}/>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}