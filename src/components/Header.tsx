"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] rounded-lg bg-cyan-950 border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-accent font-bold text-lg">CHANGE</div>
          <div className="text-foreground font-light text-lg">IT NOW</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-foreground hover:text-accent transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-accent transition-colors text-sm"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-accent transition-colors text-sm"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-accent transition-colors text-sm"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-accent transition-colors text-sm"
          >
            Contact
          </Link>
          <button className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <button className="w-full bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
