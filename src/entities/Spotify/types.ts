export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Spotify.Entity[];
  available_markets: string[];
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Queue {
  album: Album;
  artists: Spotify.Entity[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface CurrentlyPlaying {
  album: Album;
  artists: Spotify.Entity[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface SpotifyQueue {
  currently_playing: CurrentlyPlaying;
  queue: Queue[];
}

export interface SpotifyPlayback {
  player: Spotify.Player;
  playbackState: Spotify.PlaybackState;
}
