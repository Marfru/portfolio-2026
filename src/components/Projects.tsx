"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Code2, Truck, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectLogo = ({ logo }: { logo: string }) => {
  if (logo === "tesla") {
    return (
<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 28 28" viewBox="0 0 28 28" id="tesla">
  <path fill="#FFA0C6" d="M1.167,4.621c0.745,0.167,10.417-4.75,22.333,0c-0.615,3.093-3.44,5.551-3.44,5.551s-3.221-3.414-3.977-1.051c-0.511,1.599-1.93,8.511-2.795,12.815c-0.155,0.773-1.26,0.774-1.418,0.001L9.083,8.288c0,0-1.949,1.301-3.725,1.442C3.583,9.871,1.167,4.621,1.167,4.621z"></path>
  <path d="M3.144,6.5c-0.176,0-0.345-0.093-0.436-0.255C2.237,5.407,2.041,4.895,2.032,4.873c-0.098-0.257,0.03-0.545,0.287-0.644C6.094,2.766,10.023,2.016,13.998,2c0.001,0,0.003,0,0.004,0c3.97,0.016,7.898,0.766,11.679,2.228c0.248,0.097,0.377,0.37,0.295,0.622c-0.016,0.046-0.162,0.474-0.685,1.396c-0.125,0.22-0.397,0.312-0.631,0.213c-3.326-1.42-6.917-2.151-10.656-2.091c-0.018-0.009-0.041-0.001-0.062-0.003C10.216,4.301,6.637,5.049,3.34,6.46C3.276,6.487,3.21,6.5,3.144,6.5z M3.172,4.976c0.054,0.111,0.119,0.242,0.195,0.389c3.321-1.354,6.866-2.042,10.637-2c0.016,0,0.031,0.001,0.047,0.003c0.066-0.001,0.134-0.001,0.201-0.001c3.636,0,7.125,0.671,10.383,1.998c0.08-0.15,0.145-0.279,0.197-0.388C21.317,3.68,17.676,3.015,14,3C10.32,3.015,6.681,3.68,3.172,4.976z"></path>
  <path d="M14,26c-0.241,0-0.447-0.172-0.491-0.408L10.345,8.585C7.546,8.62,7.187,9.027,7.103,9.85c-0.016,0.154-0.102,0.292-0.232,0.374c-0.133,0.082-0.292,0.097-0.438,0.044c-0.09-0.033-2.223-0.838-3.338-2.521C3.014,7.626,2.99,7.475,3.029,7.335C3.069,7.194,3.168,7.079,3.3,7.018C7.396,5.111,11.447,5.004,11.617,5c0.15,0.01,0.306,0.066,0.403,0.19l1.976,2.503l1.983-2.508c0.098-0.123,0.236-0.192,0.403-0.189c0.17,0.004,4.221,0.111,8.318,2.016c0.132,0.062,0.23,0.177,0.271,0.317c0.039,0.14,0.016,0.29-0.064,0.412c-1.114,1.684-3.249,2.494-3.339,2.528c-0.145,0.054-0.307,0.038-0.438-0.044s-0.218-0.221-0.233-0.374c-0.084-0.821-0.444-1.229-3.26-1.263l-3.146,17.002C14.448,25.828,14.241,26,14,26L14,26z M10.76,7.582c0.241,0,0.447,0.172,0.491,0.408l2.748,14.769l2.73-14.764c0.043-0.237,0.25-0.409,0.491-0.409c2.288,0,4.002,0.12,4.523,1.509c0.524-0.264,1.339-0.743,1.96-1.432c-3.153-1.333-6.228-1.604-7.099-1.655l-2.217,2.803C14.293,8.93,14.149,9,13.996,9l0,0c-0.153,0-0.298-0.07-0.393-0.19l-2.209-2.798c-0.872,0.052-3.945,0.322-7.097,1.656c0.62,0.688,1.434,1.164,1.956,1.426C6.774,7.702,8.481,7.582,10.76,7.582z"></path>
</svg>
    );
  }

  if (logo === "coloreshtml") {
    return (
      <div className="flex items-center gap-1">
        <div className="grid grid-cols-2 w-6 h-6 border-2 border-black">
          <div className="bg-red-500 w-full h-full" />
          <div className="bg-yellow-400 w-full h-full" />
          <div className="bg-green-500 w-full h-full" />
          <div className="bg-blue-500 w-full h-full" />
        </div>
      </div>
    );
  }

  if (logo === "parcelify") {
    return (
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Truck className="h-6 w-6 text-white" />
        </div>
      </div>
    )

  }

    if (logo === "propfolio") {
    return (
            <div className="p-2 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
    );
  }

      if (logo === "sendcloud") {
    return (
<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="108.5 108.5 108.6 108.6" xmlSpace="preserve">
  <defs>
    <linearGradient id="SVGID_1_" x1="108.51" x2="217.01" y1="162.76" y2="162.76" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#00d2f6"/>
      <stop offset="1" stopColor="#1d96ff"/>
    </linearGradient>
  </defs>
  <path d="M141 108.5h43.6c11.3 0 15.4 1.2 19.5 3.4s7.4 5.4 9.6 9.6c2.2 4.1 3.4 8.2 3.4 19.5v43.6c0 11.3-1.2 15.4-3.4 19.5a22.8 22.8 0 01-9.6 9.6c-4.1 2.2-8.2 3.4-19.5 3.4H141c-11.3 0-15.4-1.2-19.5-3.4a22.8 22.8 0 01-9.6-9.6c-2.2-4.1-3.4-8.2-3.4-19.5V141c0-11.3 1.2-15.4 3.4-19.5s5.4-7.4 9.6-9.6c4.1-2.2 8.2-3.4 19.5-3.4z" fill="url(#SVGID_1_)" fillRule="evenodd" clipRule="evenodd"/>
  <path d="M199.3 169.4c0-8.6-6.6-15.8-15-16.7-1.2-4.3-3.8-8.3-7.3-11.2-4-3.3-9.1-5.2-14.4-5.2s-10.3 1.8-14.4 5.2c-3.5 2.9-6 6.8-7.3 11.2-8.4.9-15 8-15 16.7 0 .8.1 6.7 4.5 11.3 3.4 3.5 8.2 5.2 14.5 5.2 6 0 11.9-1 17.6-3.1 1.8.6 3.6 1.2 5.4 1.6 4 1 8.1 1.5 12.1 1.5 6.3 0 11.1-1.8 14.5-5.2 4.7-4.6 4.8-10.4 4.8-11.3zm-4.5 0s.1 4.7-3.3 8.1c-2.5 2.5-6.2 3.8-11.1 3.8-8.4 0-15.1-2.3-19.3-4.2-4-1.8-6.5-3.6-7.1-4.1-.1 0-.1-.1-.1-.2V163c0-.2.1-.3.3-.4l8.6-4.4c.1-.1.3-.1.4 0l8.6 4.4c.2.1.3.2.3.4v9.6c0 .1-.1.3-.1.3-.4.3-1.9 1.4-4.2 2.7 1.9.6 4.1 1.1 6.4 1.4.5-.4.8-.6.8-.6.8-.7 1.7-2 1.7-3.8V163c0-1.9-1.1-3.6-2.7-4.5l-8.6-4.4a5.3 5.3 0 00-4.6 0l-8.6 4.4c-1.7.9-2.7 2.6-2.7 4.5v9.6c0 1.7.9 3.1 1.7 3.8.1.1 2 1.6 5.5 3.5-3.7.9-7.4 1.3-11.2 1.3-4.9 0-8.7-1.3-11.1-3.8-3.3-3.4-3.3-8-3.3-8.1v-.1c0-6.7 5.5-12.2 12.2-12.2h1.9l.4-1.9c.8-4 3-7.7 6.1-10.3 3.2-2.7 7.3-4.1 11.4-4.1s8.2 1.5 11.4 4.1c3.2 2.6 5.3 6.3 6.1 10.3l.4 1.9h1.9c6.4.2 11.9 5.6 11.9 12.4z" fill="#fff"/>
</svg>
    );
  }

  return null;
};

// Helper function to convert URLs in text to clickable links
const parseDescription = (text: string) => {
  // Regex to match URLs (including those without http/https)
  const urlRegex = /(\b(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[^\s]*)?)/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = urlRegex.exec(text)) !== null) {
    // Add text before the URL
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the URL as a link
    const url = match[0];
    const href = url.startsWith('http') ? url : `https://${url}`;
    parts.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-500 hover:underline"
      >
        {url}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text after the last URL
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const handleProjectClick = (project: any) => {
    if (project.logo === "sendcloud") {
      setSelectedProject(project);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Projects</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          There&apos;s more to show but I will only showcase a few selected projects here. You can find the rest on my GitHub profile. Sign up to the newsletter to be notified when I release new projects!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group">
            <div className={`border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-6 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm h-full transition-colors ${project.is_live ? 'group-hover:border-gray-400/50 dark:group-hover:border-gray-600/50' : ''}`}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="shrink-0">
                    <ProjectLogo logo={project.logo} />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    {!project.is_live && (
                      <span className="-mt-3 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                {project.is_live && project.logo !== "sendcloud" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.ariaLabel}
                    className="shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" />
                  </a>
                )}
                {project.is_live && project.logo === "sendcloud" && (
                  <button
                    onClick={() => handleProjectClick(project)}
                    aria-label="View project details"
                    className="shrink-0 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" />
                  </button>
                )}
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                {parseDescription(project.description)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full ${
                      tag === "Beta"
                        ? "font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700"
                        : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <ProjectLogo logo={selectedProject.logo} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Add your modal content here */}
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Image
                    src="/scfe-app.png"
                    alt="Sendcloud FE App"
                    width={800}
                    height={550}
                    className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
