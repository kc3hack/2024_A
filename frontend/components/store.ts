import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedMusicId: 999,
  playingMusicId: 0,
  isPlaying: false,
  playbackPosition: 0, // 初期値は0秒
  newlySelectedMusicId: 0 as number | null, // 新しく選択した音楽のIDを格納する状態
};

export type RootState = {
  selectedMusicId: number;
  playingMusicId: number;
  isPlaying: boolean;
  playbackPosition: number; // 再生位置を秒単位で保持
  newlySelectedMusicId: number | null; // 新しく選択した音楽のID
};

type Action = {
  type: string;
  payload: number | boolean | null; // Assuming payload is of type number, boolean, or null
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_MUSIC_ID":
      return { ...state, selectedMusicId: action.payload as number };
    case "SET_PLAYING_MUSIC_ID": // 追加: 再生中の音楽のIDを設定
      return { ...state, playingMusicId: action.payload as number };
    case "SET_PLAYING_STATUS":
      return { ...state, isPlaying: action.payload as boolean };
    case "SET_PLAYBACK_POSITION":
      return { ...state, playbackPosition: action.payload as number }; // 再生位置を更新
    case "SET_NEWLY_SELECTED_MUSIC_ID": // 新しく選択した音楽のIDを設定
      return { ...state, newlySelectedMusicId: action.payload as number };
    default:
      return state;
  }
}

export const store = configureStore({ reducer });
