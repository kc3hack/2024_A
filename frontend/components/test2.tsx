import { musicData } from "./App";
const data = musicData;
export function search(keyWord: string): number[] {
  const result: number[] = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.title.indexOf(keyWord) >= 0) {
      result.push(index);
    }
  }
  return result;
}
