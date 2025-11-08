"use client";

import { useEffect, useState } from "react";
import { socials } from "@/data/socials";

const sections = ["about", "experience", "projects"];

export default function Menu() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleIntersect = (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => ({
          id: entry.target.id,
          top: entry.boundingClientRect.top,
        }));

      if (visible.length === 0) return;

      // Find the one whose top is closest to 0 (top of the viewport)
      const closestToTop = visible.reduce((prev, curr) =>
        Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
      );

      setActiveSection(closestToTop.id);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -60% 0px", // prioritize top visibility
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-8 text-left h-full">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Marcos Frutos
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
          Senior Front End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web
        </p>
        <p className="mt-4 max-w-xs font-medium leading-normal">
          hola@marfru.com
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        <ul className="space-y-1 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`group flex items-center py-3 transition-colors ${
                  activeSection === section ? "text-slate-200" : ""
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all ${
                    activeSection === section
                      ? "bg-slate-200 w-14"
                      : "bg-slate-600 group-hover:bg-slate-200 w-8"
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === section
                      ? "text-slate-200"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {section}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex gap-4 text-zinc-400">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
