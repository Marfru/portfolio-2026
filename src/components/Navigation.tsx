"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="relative">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center shadow-lg border border-slate-900 dark:border-slate-100">
            <span className="text-white dark:text-slate-900 font-bold text-base">M</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/experience" 
            className="font-semibold text-sm text-slate-900 dark:text-slate-100"
          >
            Experience
          </Link>
          <Link 
            href="/projects" 
            className="font-semibold text-sm text-slate-900 dark:text-slate-100"
          >
            Projects
          </Link>
          <a 
            href="mailto:hola@marfru.com" 
            className="font-semibold text-sm text-slate-900 dark:text-slate-100"
          >
            Contact
          </a>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-8 w-14 items-center rounded-full border border-gray-300 dark:border-gray-600 bg-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer"
              aria-label="Toggle theme"
            >
              {/* Icon with background that slides */}
              <span
                className={`absolute inline-flex h-6 w-6 items-center justify-center transform rounded-full transition-all duration-300 ${
                  theme === "dark" 
                    ? "translate-x-7 bg-slate-800" 
                    : "translate-x-1 bg-gray-100"
                }`}
              >
                {theme === "dark" ? (
                  <Moon className="w-4 h-4 text-white" />
                ) : (
                  <Sun className="w-4 h-4 text-black" />
                )}
              </span>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-900 dark:text-slate-100 cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu className="w-8 h-8 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-slate-900 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-slate-900 dark:text-slate-100 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-10 h-10 cursor-pointer" />
            </button>
          </div>

          {/* Menu Items - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col">
            <Link 
                href="/" 
                className="font-bold text-5xl text-slate-900 dark:text-slate-100 py-6 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <hr className="w-full border-slate-200 dark:border-slate-800" />
              <Link 
                href="/experience" 
                className="font-bold text-5xl text-slate-900 dark:text-slate-100 py-6 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <hr className="w-full border-slate-200 dark:border-slate-800" />
              
              <Link 
                href="/projects" 
                className="font-bold text-5xl text-slate-900 dark:text-slate-100 py-6 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <hr className="w-full border-slate-200 dark:border-slate-800" />
              
              <a 
                href="mailto:hola@marfru.com" 
                className="font-bold text-5xl text-slate-900 dark:text-slate-100 py-6 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <hr className="w-full border-slate-200 dark:border-slate-800" />
            </div>
          </div>

          {/* Theme Toggle - Fixed Bottom */}
          {mounted && (
            <div className="flex items-center justify-center py-6 px-6">
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-8 w-14 items-center rounded-full border border-gray-300 dark:border-gray-600 bg-transparent transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer"
                aria-label="Toggle theme"
              >
                {/* Icon with background that slides */}
                <span
                  className={`absolute inline-flex h-6 w-6 items-center justify-center transform rounded-full transition-all duration-300 ${
                    theme === "dark" 
                      ? "translate-x-7 bg-slate-800" 
                      : "translate-x-1 bg-gray-100"
                  }`}
                >
                  {theme === "dark" ? (
                    <Moon className="w-4 h-4 text-white" />
                  ) : (
                    <Sun className="w-4 h-4 text-black" />
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
