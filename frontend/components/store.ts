// store.ts
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedMusicId: 999,
};
export type RootState = {
  selectedMusicId: null;
};

type Action = {
  type: string;
  payload: number; // Assuming payload is of type number, replace 'any' with the appropriate type
};
function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_MUSIC_ID":
      return { ...state, selectedMusicId: action.payload };
    default:
      return state;
  }
}

export const store = configureStore({ reducer });
