import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedMusicId: 999,
  isPlaying: false,
  playbackPosition: 0, // 初期値は0秒
};
export type RootState = {
  selectedMusicId: null;
  isPlaying: boolean;
  playbackPosition: number; // 再生位置を秒単位で保持
};

type Action = {
  type: string;
  payload: number | boolean; // Assuming payload is of type number or boolean
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_MUSIC_ID":
      return { ...state, selectedMusicId: action.payload as number };
    case "SET_PLAYING_STATUS":
      return { ...state, isPlaying: action.payload as boolean };
    case "SET_PLAYBACK_POSITION":
      return { ...state, playbackPosition: action.payload as number }; // 再生位置を更新
    default:
      return state;
  }
}

export const store = configureStore({ reducer });
