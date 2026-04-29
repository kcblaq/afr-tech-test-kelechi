"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { RiCodeLine, RiSearchLine } from "@remixicon/react";
import { useContacts } from "@/context/ContactContext";
import { Switch } from "./ui/switch";
import { usePathname } from "next/navigation";


export function Navbar() {
  const { searchQuery, setSearchQuery } = useContacts();
  const [theme, setTheme] = useState("luma");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("app-theme") || "luma";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? "maia" : "luma";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center">
            <RiCodeLine className="text-primary-foreground size-5" />
          </div>
          <Link href="/" className="font-heading font-bold text-xl tracking-tight">TechLuma</Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/manage-contacts" className="transition-colors hover:text-primary">Manage Contacts</Link>
          <Link href="/add-contacts" className="transition-colors hover:text-primary">Add Contacts</Link>
        </nav>
        <div className="flex items-center gap-4">
          {pathname === "/manage-contacts" && <div className="relative hidden md:block w-48 lg:w-64">
            <RiSearchLine className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search contacts..."
              className="pl-8 bg-muted/50 rounded-full h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>}
          <div className="flex items-center gap-2" title="Toggle Theme (Maia/Luma)">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{theme}</span>
            <Switch checked={theme === "maia"} onCheckedChange={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
