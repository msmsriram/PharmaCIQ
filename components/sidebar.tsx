"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  FileText,
  FlaskRoundIcon as Flask,
  Home,
  LineChart,
  Newspaper,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarNavItems = [
  {
    title: "mCRPC Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "mCRPC Competitors",
    href: "/competitors",
    icon: Users,
  },
  {
    title: "mCRPC Market Analysis",
    href: "/market-analysis",
    icon: BarChart3,
  },
  {
    title: "mCRPC Pipeline Tracking",
    href: "/pipeline",
    icon: Flask,
  },
  {
    title: "mCRPC Patent Monitor",
    href: "/patents",
    icon: FileText,
  },
  {
    title: "mCRPC News & Events",
    href: "/news",
    icon: Newspaper,
  },
  {
    title: "mCRPC Trend Analysis",
    href: "/trends",
    icon: LineChart,
  },
  {
    title: "mCRPC Intelligence Search",
    href: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary-amber">
          <Flask className="h-6 w-6" />
          <span>PharmaCIQ</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-tight">Navigation</h2>
            <div className="space-y-1">
              {sidebarNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href ? "bg-primary-blue text-white font-medium" : "font-normal",
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

