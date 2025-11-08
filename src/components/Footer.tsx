import { socials } from "@/data/socials";
import Image from "next/image";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-center md:text-left md:justify-between">
            <div className="flex flex-col items-center md:items-start md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/profile.png" 
                  alt="Marcos Frutos" 
                  width={40} 
                  height={40} 
                  className="rounded-full object-cover w-10 h-10 shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300">Marcos Frutos</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Sr Frontend Engineer</p>
                </div>
              </div>
              <div className="flex gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--muted) hover:text-(--heading) transition-colors"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" />
                  </a>
                ))}
              </div>
              <p className="text-xs leading-6 text-gray-600 dark:text-gray-400 text-balance mt-4">
                © {currentYear} Marcos Frutos. All Rights Reserved.
              </p>
            </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100 text-sm">What I&apos;m listening to</h3>
                  <SpotifyNowPlaying />
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
