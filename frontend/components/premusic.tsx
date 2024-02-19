import React, { useState } from 'react';

interface Song {
  file: string;
  title: string;
  bpm: number;
}

const musicLibrary: Record<string, Song> = {
  song1: {
    file: '../public/PressEnter.mp3',
    title: 'Song 1',
    bpm: 120,
  },
  song2: {
    file: '../public/Glowing_Moon/PerituneMaterial_Glowing_Moon_192k.mp3',
    title: 'Song 2',
    bpm: 140,
  },
  // 他の曲も同様に追加できます
};

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const playSong = (songId: string) => {
    const selectedSong = musicLibrary[songId];
    if (selectedSong) {
      setCurrentSong(songId);
    } else {
      console.log('Song not found');
    }
  };

  return (
    <div>
      <h1>Music Player</h1>
      <div>
        {Object.keys(musicLibrary).map((songId) => (
          <button key={songId} onClick={() => playSong(songId)}>
            {musicLibrary[songId].title}
          </button>
        ))}
      </div>
      {currentSong && (
        <div>
          <h2>Now Playing: {musicLibrary[currentSong].title}</h2>
          <audio controls src={musicLibrary[currentSong].file} />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
