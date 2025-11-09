"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        setSpotify(data);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
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

  if (!spotify.isPlaying) {
    return null;
  }

  return (
    <>
      <hr className="w-full border-gray-300/50 dark:border-gray-700/50 md:hidden" />
      <div className="flex flex-col items-start md:items-start w-full md:w-auto">
        <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100 text-sm">Currently listening to</h3>
      <div className="flex items-center gap-3">
      <div className="mt-1 relative">
        <Image
          src={spotify.albumImageUrl!}
          alt={spotify.album || 'Album cover'}
          width={40}
          height={40}
          className="rounded shadow-sm"
        />
        <span className="absolute -top-1 -left-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      <div className="w-[150px] overflow-hidden text-left">
        <a 
          href={spotify.songUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-70 transition-opacity"
        >
          <div className="overflow-hidden">
            <p 
              ref={titleRef}
              className={`text-sm font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap text-left ${
                shouldAnimateTitle ? 'animate-marquee' : ''
              }`}
            >
              {spotify.title}
            </p>
          </div>
          <div className="overflow-hidden">
            <p 
              ref={artistRef}
              className={`text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap text-left ${
                shouldAnimateArtist ? 'animate-marquee' : ''
              }`}
            >
              {spotify.artist}
            </p>
          </div>
        </a>
      </div>
      </div>
      </div>
    </>
  );
}
