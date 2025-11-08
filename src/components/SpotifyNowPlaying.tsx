"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
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
    return (
      <div className="flex items-center gap-3 border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm">
        <div className="mt-1">
          <FontAwesomeIcon icon={faSpotify} style={{ width: '40px', height: '40px' }} className="text-gray-600 dark:text-gray-400 animate-pulse" />
        </div>
        <div className="w-[150px]">
          <p className="text-sm text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm">
      <div className="mt-1 relative">
        {spotify.isPlaying && spotify.albumImageUrl ? (
          <>
            <Image
              src={spotify.albumImageUrl}
              alt={spotify.album || 'Album cover'}
              width={40}
              height={40}
              className="rounded shadow-sm"
            />
            <span className="absolute -top-1 -left-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </>
        ) : (
          <FontAwesomeIcon icon={faSpotify} style={{ width: '40px', height: '40px' }} className="text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <div className="w-[150px] overflow-hidden">
        {spotify.isPlaying && spotify.songUrl ? (
          <a 
            href={spotify.songUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity"
          >
            <div className="overflow-hidden">
              <p 
                ref={titleRef}
                className={`text-sm font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap ${
                  shouldAnimateTitle ? 'animate-marquee' : ''
                }`}
              >
                {spotify.title}
              </p>
            </div>
            <div className="overflow-hidden">
              <p 
                ref={artistRef}
                className={`text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ${
                  shouldAnimateArtist ? 'animate-marquee' : ''
                }`}
              >
                {spotify.artist}
              </p>
            </div>
          </a>
        ) : (
          <>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Not Playing
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Spotify
            </p>
          </>
        )}
      </div>
    </div>
  );
}
