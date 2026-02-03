"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BarChart3,
  Swords,
  School,
  FileText,
  Bell,
  Settings,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [analyticsOpen, setAnalyticsOpen] = useState(true);

  const isActive = (path) => pathname === path;

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/analytics",
      subItems: [
        { label: "Search Analytics", path: "/analytics/search" },
        { label: "Geographic Analytics", path: "analytics/geographic" },
        { label: "Program Performance", path: "/analytics/programs" },
        { label: "Student Demographics", path: "/analytics/demographics" },
        { label: "Market Insights", path: "/analytics/market" },
      ],
    },
    { icon: Swords, label: "Competitive Analysis", path: "/competitive" },
    { icon: School, label: "School Insights", path: "/school-insights" },
    { icon: FileText, label: "Reports", path: "/reports" },
    { icon: Bell, label: "Alerts & Notifications", path: "/alerts" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform lg:translate-x-0 lg:static flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              A
            </div>
            AGSPortals
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="ml-auto lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => setAnalyticsOpen(!analyticsOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm",
                      pathname.startsWith("/analytics")
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        analyticsOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {analyticsOpen && (
                    <div className="ml-4 pl-4 border-l border-slate-700 space-y-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm",
                            isActive(sub.path)
                              ? "text-blue-400 bg-blue-400/10"
                              : "text-slate-400 hover:bg-slate-800 hover:text-white"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
                    isActive(item.path)
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 shadow-lg flex items-center justify-between px-4  ">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </Button>
            <div className="relative hidden md:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search for students, programs, or reports..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

          <div className="flex items-center gap-4  ml-auto ">
            <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-slate-700">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-4 py-1 h-auto hover:bg-slate-50 rounded-full border border-transparent hover:border-slate-200 transition-all">
                  <Avatar className="h-8 w-8 border border-slate-200">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start text-xs">
                    <span className="font-semibold text-slate-700">John Smith</span>
                    <span className="text-slate-500">Admin</span>
                  </div>
                  <ChevronDown className="h-3 w-3 text-black ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white text-black">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}
