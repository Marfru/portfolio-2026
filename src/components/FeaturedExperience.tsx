"use client";

import { experience } from "@/data/experience";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function FeaturedExperience() {
  const featuredExperiences = experience.slice(0, 2);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-1 text-left">
          Featured
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-left">
          Experience
        </h2>

        <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-300/50 dark:border-gray-700/50 p-6 mb-6">
          {featuredExperiences.map((exp, index) => (
            <div
              key={index}
              className={
                index > 0
                  ? "pt-6 mt-6 border-t border-gray-300/20 dark:border-gray-700/20"
                  : ""
              }
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full text-left cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    {/* {!exp.endDate && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm mb-4 w-fit">
                        <div className="relative flex items-center justify-center">
                          <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Currently working
                        </span>
                      </div>
                    )} */}
                    <div className="flex gap-4">
                      {exp.logo && (
                        <div className="shrink-0">
                          <div className="w-12 h-12 rounded-lg border border-gray-300/50 bg-white p-2 flex items-center justify-center">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {exp.title}
                          </h3>
                          <FontAwesomeIcon
                            icon={
                              expandedIndex === index
                                ? faChevronUp
                                : faChevronDown
                            }
                            className="text-gray-400 dark:text-gray-500 w-4 h-4"
                          />
                        </div>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={exp.ariaLabel}
                          className="text-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <p>
                      {exp.startDate}
                      {exp.endDate && ` - ${exp.endDate}`}
                    </p>
                    <p>{exp.location}</p>
                  </div>
                </div>
              </button>

              {expandedIndex === index && (
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 dark:text-gray-500 mr-2">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/experience" variant="primary">
            Explore more
          </Button>
        </div>
      </div>
    </section>
  );
}
