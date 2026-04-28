"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiCodeLine, RiSearchLine } from "@remixicon/react";
import { useContacts } from "@/context/ContactContext";

export function Navbar() {
  const { searchQuery, setSearchQuery } = useContacts();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center">
            <RiCodeLine className="text-primary-foreground size-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">TechLuma</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          <Link href="/register" className="transition-colors hover:text-primary">Register</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          <Link href="/dashboard" className="transition-colors hover:text-primary">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-48 lg:w-64">
            <RiSearchLine className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search contacts..."
              className="pl-8 bg-muted/50 rounded-full h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
