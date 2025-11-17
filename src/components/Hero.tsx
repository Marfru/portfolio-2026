"use client";

import Button from "./common/Button";
import TypingEffect from "./common/TypingEffect";
import {
  faArrowUpRightFromSquare,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faFileZipper } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function Hero() {
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      // Convert to Netherlands time (Europe/Amsterdam)
      const netherlandsTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })
      );

      const day = netherlandsTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = netherlandsTime.getHours();

      // Monday to Friday (1-5) and between 9am-5pm
      const isWeekday = day >= 1 && day <= 5;
      const isWorkHours = hour >= 9 && hour < 17;

      setIsWorking(isWeekday && isWorkHours);
    };

    checkWorkingHours();
    // Update every minute
    const interval = setInterval(checkWorkingHours, 60000);

    return () => clearInterval(interval);
  }, []);

  const welcomeWords = [
    "Welcome,",
    "Bienvenido,",
    "Welkom,",
    "Bienvenue,",
    "歡迎,",
    "Willkommen,",
    "ようこそ,",
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="space-y-8 flex-1">
          <div>
            <p className="text-slate-600 dark:text-slate-300 font-semibold leading-7">
              <TypingEffect words={welcomeWords} delayBetweenWords={1000} />
            </p>
            <h1 className="font-bold text-4xl leading-9 sm:text-5xl tracking-tighter sm:leading-14 mt-2 text-gray-900 dark:text-gray-100">
              I&apos;m Marcos, a Frontend Engineer based in the Netherlands.
            </h1>
          </div>

          {/* <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" viewBox="0 0 256 221" fill="currentColor">
              <path d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36z"/>
              <path d="M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0z"/>
              <path d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56z"/>
            </svg>
            <span className="font-medium text-sm text-slate-600 dark:text-slate-400">Vue.js</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
            </svg>
            <span className="font-medium text-sm text-slate-600 dark:text-slate-400">React</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" viewBox="0 0 180 180" fill="none">
              <mask id="mask0_408_134" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black"/>
              </mask>
              <g mask="url(#mask0_408_134)">
                <circle cx="90" cy="90" r="90" fill="currentColor"/>
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"/>
                <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_134)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_408_134" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_408_134" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-medium text-sm text-slate-600 dark:text-slate-400">Next.js</span>
          </div>
        </div> */}

          {/* Working Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
            <div className="relative flex items-center justify-center">
              <span
                className={`absolute inline-flex h-2 w-2 rounded-full ${
                  isWorking ? "bg-green-400" : "bg-red-400"
                } opacity-75 animate-ping`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isWorking ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {isWorking ? "Currently working" : "Currently resting"}
            </span>
          </div>

          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            I&apos;m passionate about creating meaningful digital experiences
            and currently serve as a Senior Frontend Engineer at{" "}
            <a
              href="https://www.sendcloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Sendcloud
            </a>{" "}
            – helping build scalable shipping solutions for thousands of
            e-commerce businesses.
          </p>

          <div className="flex gap-3 pt-4">
            <Button
              href="/cv-Marcos Frutos.pdf"
              variant="primary"
              icon={faFile}
              external
            >
              CV / Resume
            </Button>
            <Button
              href="mailto:hola@marfru.com"
              variant="secondary"
              icon={faArrowUpRightFromSquare}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Profile Images */}
        <div className="hidden md:flex gap-4 md:flex-col">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg drop-shadow-lg">
            <Image
              src="/profile-2.jpg"
              alt="Marcos Frutos"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 -mt-8 md:-mt-8 md:ml-10 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg drop-shadow-lg">
            <Image
              src="/profile-3.jpg"
              alt="Marcos Frutos"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
