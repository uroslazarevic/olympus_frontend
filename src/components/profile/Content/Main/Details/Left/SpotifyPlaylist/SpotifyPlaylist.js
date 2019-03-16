import React from "react";
import { InfoBlock } from "components/UI";
import { ProfileContentMainDetailsLeftSpotifyPlaylistSongItem } from "components";

const SpotifyPlaylist = ({ spotifyList }) => {
  return (
    <div className="spotify-playlist">
      <InfoBlock name="My Spotify Playlist">
        <ul className="spotify-songs-list">
          {spotifyList.map((song, index) => {
            return (
              <ProfileContentMainDetailsLeftSpotifyPlaylistSongItem
                key={song.id}
                song={song}
                index={index}
              />
            );
          })}
        </ul>
      </InfoBlock>
    </div>
  );
};

export default SpotifyPlaylist;
