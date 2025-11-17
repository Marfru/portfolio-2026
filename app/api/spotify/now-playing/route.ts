import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const runtime = "edge";

interface SpotifyArtist {
  name: string;
}

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      // If nothing is playing, get the last played song
      const recentResponse = await getRecentlyPlayed();

      if (recentResponse.status === 200) {
        const recentData = await recentResponse.json();

        if (recentData.items && recentData.items.length > 0) {
          const lastSong = recentData.items[0].track;

          return NextResponse.json({
            isPlaying: false,
            title: lastSong.name,
            artist: lastSong.artists
              .map((_artist: SpotifyArtist) => _artist.name)
              .join(", "),
            album: lastSong.album.name,
            albumImageUrl: lastSong.album.images[0].url,
            songUrl: lastSong.external_urls.spotify,
          });
        }
      }

      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();

    if (!song.item) {
      // If nothing is playing, get the last played song
      const recentResponse = await getRecentlyPlayed();

      if (recentResponse.status === 200) {
        const recentData = await recentResponse.json();

        if (recentData.items && recentData.items.length > 0) {
          const lastSong = recentData.items[0].track;

          return NextResponse.json({
            isPlaying: false,
            title: lastSong.name,
            artist: lastSong.artists
              .map((_artist: SpotifyArtist) => _artist.name)
              .join(", "),
            album: lastSong.album.name,
            albumImageUrl: lastSong.album.images[0].url,
            songUrl: lastSong.external_urls.spotify,
          });
        }
      }

      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: SpotifyArtist) => _artist.name)
      .join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return NextResponse.json({ isPlaying: false });
  }
}
