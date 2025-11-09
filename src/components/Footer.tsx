import { socials } from "@/data/socials";
import Image from "next/image";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:mt-12 mb-8">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl text-center md:text-left md:justify-between">
            <div className="flex flex-col items-center md:items-start md:col-span-1 gap-4 md:gap-0">
              <div className="flex flex-col items-center gap-6 p-6 rounded-2xl border border-gray-300/50 dark:border-gray-700/50 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md w-full md:hidden">
                <div className="flex flex-col items-center gap-3 w-full">
                  <Image 
                    src="/profile.png" 
                    alt="Marcos Frutos" 
                    width={80} 
                    height={80} 
                    className="rounded-full object-cover w-20 h-20 shadow-sm"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-xl group-hover:text-gray-600 dark:group-hover:text-gray-300">Marcos Frutos</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sr Frontend Engineer</p>
                  </div>
                </div>
                <div className="flex gap-6 w-full justify-center">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--muted) hover:text-(--heading) transition-colors"
                      aria-label={social.name}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" style={{ width: '30px', height: '30px' }} />
                    </a>
                  ))}
                </div>
                <SpotifyNowPlaying />
              </div>
              
              <div className="hidden md:flex md:flex-row items-center gap-3 md:mb-4">
                <Image 
                  src="/profile.png" 
                  alt="Marcos Frutos" 
                  width={80} 
                  height={80} 
                  className="rounded-full object-cover md:w-10 md:h-10 shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 md:text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300">Marcos Frutos</h3>
                  <p className="md:text-xs text-gray-600 dark:text-gray-400">Sr Frontend Engineer</p>
                </div>
              </div>
              <div className="hidden md:flex gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--muted) hover:text-(--heading) transition-colors"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 md:w-5! md:h-5!" />
                  </a>
                ))}
              </div>
              <p className="hidden md:block text-xs leading-6 text-gray-600 dark:text-gray-400 text-balance mt-4">
                © {currentYear} Marcos Frutos. All Rights Reserved.
              </p>
            </div>
              <div className="hidden md:flex flex-col items-end">
                <SpotifyNowPlaying />
              </div>
            </div>
          </div>
        </div>
        <p className="md:hidden text-xs leading-6 text-gray-600 dark:text-gray-400 text-balance text-center mt-8">
          © {currentYear} Marcos Frutos. All Rights Reserved.
        </p>
    </footer>
  );
}
