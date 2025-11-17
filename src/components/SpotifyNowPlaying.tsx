"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [spotify, setSpotify] = useState<SpotifyData>({
    isPlaying: false,
  });
  const [loading, setLoading] = useState(true);
  const [shouldAnimateTitle, setShouldAnimateTitle] = useState(false);
  const [shouldAnimateArtist, setShouldAnimateArtist] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const artistRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify/now-playing");
        const data = await response.json();
        setSpotify(data);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        setSpotify({ isPlaying: false });
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Use setTimeout to ensure DOM has rendered
    const checkWidths = () => {
      if (titleRef.current && spotify.title) {
        const titleWidth = titleRef.current.offsetWidth;
        const titleScrollWidth = titleRef.current.scrollWidth;
        setShouldAnimateTitle(titleScrollWidth > titleWidth);
      }
      if (artistRef.current && spotify.artist) {
        const artistWidth = artistRef.current.offsetWidth;
        const artistScrollWidth = artistRef.current.scrollWidth;
        setShouldAnimateArtist(artistScrollWidth > artistWidth);
      }
    };

    const timer = setTimeout(checkWidths, 100);

    return () => clearTimeout(timer);
  }, [spotify.title, spotify.artist]);

  if (loading) {
    return null;
  }

  // Don't render if no track data at all
  if (!spotify.title) {
    return null;
  }

  return (
    <>
      <hr className="w-full border-gray-300/50 dark:border-gray-700/50 md:hidden" />
      <a
        href={spotify.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 w-full md:w-auto p-3 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 group cursor-pointer hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="relative">
          <Image
            src={spotify.albumImageUrl!}
            alt={spotify.album || "Album cover"}
            width={40}
            height={40}
            className="rounded shadow-sm"
          />
        </div>
        <div className="w-[150px] overflow-hidden text-left">
          <div className="flex items-center gap-1.5 mb-1">
            <svg
              viewBox="0 0 24 24"
              className="w-3 h-3"
              fill="#1DB954"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {spotify.isPlaying ? "Listening to" : "Last song played"}
            </span>
          </div>
          <div className="overflow-hidden">
            <p
              ref={titleRef}
              className={`text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#1DB954]! whitespace-nowrap text-left transition-colors ${
                shouldAnimateTitle ? "animate-marquee" : ""
              }`}
            >
              {spotify.title}
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              ref={artistRef}
              className={`text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap text-left ${
                shouldAnimateArtist ? "animate-marquee" : ""
              }`}
            >
              {spotify.artist}
            </p>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faPlay}
          className="text-gray-400 dark:text-gray-500 w-3 h-3"
        />
      </a>
    </>
  );
}
