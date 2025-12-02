"use client";

import { experience } from "@/data/experience";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AllExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-left">
        Experience
      </h1>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-8 text-left">
        My professional journey and work history
      </p>

      <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-300/50 dark:border-gray-700/50 p-6">
        {experience.map((exp, index) => (
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
    </section>
  );
}
