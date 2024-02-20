import React, { useState } from 'react';

var historyData:string="";

interface Song {
  file: string;
  title: string;
  bpm: number;
  point: number;
}

const musicLibrary: Record<string, Song> = {
  song1: {
      file: '../public/PressEnter.mp3',
      title: 'Press Enter',
      bpm: 120,
      point: 0
  },
  song2: {
      file: '../public/Glowing_Moon/PerituneMaterial_Glowing_Moon_192k.mp3',
      title: 'Glowing_Moon',
      bpm: 140,
      point: 0
  },
  song3: {
    file: '../public/Glowing_Moon/PerituneMaterial_Glowing_Moon_192k.mp3',
    title: 'Glowing_Moon2',
    bpm: 140,
    point: 0
},
  // 他の曲も同様に追加できます
};

const MusicPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  const playSong = (songId: string) => {
    const selectedSong = musicLibrary[songId];
    if (selectedSong) {
      setCurrentSong(songId);
      if (historyData=="") {
        historyData+=songId;
      }else{
        historyData=songId+","+historyData
      }
      console.log(historyData);
      
    } else {
      console.log('Song not found');
    }
  };

  function showhistory() {
    const prehistory=historyData.split(",");
    var preString:string="";
    for (let index = 0; index < prehistory.length; index++) {
        const element = prehistory[index];
        if (preString.indexOf(element)==-1) {
            if (preString=="") {
                preString=element;
            }else{
                preString+=","+element;
            }
        }
    }
    console.log(preString);
    historyData=preString;
    const fileList=document.getElementById("list");
    fileList!.innerHTML="";
    for (let index = 0; index < historyData.split(",").length; index++) {
        const element = historyData.split(",")[index];
        const listItem = document.createElement('li');
      listItem.textContent = element;
      fileList!.appendChild(listItem);
      console.log(element);
    }
  }
  return (
    <div>
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
      <button id='history' onClick={() => showhistory()}>履歴</button>
      <li id='list'></li>
    </div>
  );
};

export default MusicPlayer;
