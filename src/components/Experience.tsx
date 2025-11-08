import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="md:pb-24">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Experience</h2>
        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-12">
          My professional journey since I finished my studies back in 2015. Some experiences have been better than others, but all have contributed to my growth as an engineer.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line - left on mobile, centered on desktop */}
        <div className="absolute left-1 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
        
        <div className="space-y-16">
          {experience.map((job, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {/* Bullet point on the vertical line */}
                {idx === 0 ? (
                  // Current job with pulsing green animation
                  <div className="absolute left-1 md:left-1/2 -translate-x-1/2 top-6 flex h-3 w-3 z-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                ) : (
                  // Past jobs with gray dots
                  <div className="absolute left-1 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-gray-400 z-10" />
                )}
                
                {/* Left side */}
                {isLeft ? (
                  <div className="md:text-right md:pr-3 pl-8 md:pl-0">
                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm md:inline-block text-left w-full">
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 dark:hover:text-gray-100 underline transition-colors"
                          >
                            {job.company}
                          </a>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {job.startDate} – {job.endDate}
                          </p>
                          <span>•</span>
                          <span>{job.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                
                {/* Right side */}
                {!isLeft ? (
                  <div className="md:pl-3 pl-8 md:col-start-2">
                    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm">
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 dark:hover:text-gray-100 underline transition-colors"
                          >
                            {job.company}
                          </a>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {job.startDate} – {job.endDate}
                          </p>
                          <span>•</span>
                          <span>{job.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
