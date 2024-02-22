import { searchAuto } from "./App";
import { search } from "./test2";
import { musicData } from "./App";
import { useEffect } from "react";
import "../styles/App.css";
console.log(searchAuto);
console.log(search("n"));
for (let index = 0; index < search("n").length; index++) {
  const element = search("n")[index];
  console.log(musicData[element].title);
}
function App() {
  useEffect(() => {
    const result = document.getElementById("resultList");
    if (result) {
      drawSearch(search("n"));
    }
  });
  return (
    <>
      <div>
        <h1 id="top">検索結果</h1>
        <li id="resultList"></li>
      </div>
    </>
  );
}
export default App;

function drawSearch(data: number[]) {
  const list = document.getElementById("resultList");
  list!.innerHTML = "";
  if (data.length == 0) {
    list!.innerHTML = "検索結果がありません";
  } else {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const pretitle = document.createElement("li");
      pretitle.textContent = element.toString();
      list?.appendChild(pretitle);
    }
  }
}

/* 
  function drawResult(result) {
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = '';
  for (let index = 1; index < result.length; index++) {
    const element = result[index];
    if (element.point>0) {
      const listItem = document.createElement('li');
      listItem.textContent=element.name+" "+element.put;
      fileList.appendChild(listItem);
      console.log(element.name);
    }
  }
} */
