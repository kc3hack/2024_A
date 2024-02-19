// design.tsx
import "../styles/pre.css";
import { useEffect } from 'react';
import addressImage from '../public/address.png';
import weatherImage from '../public/weather.png';
import historyImage from '../public/history.png';
var nowMode:Number=0;
function App() {
    useEffect(()=> {
        document.getElementById('address')!.style.width = "40vw";
        document.getElementById('address')!.style.height = "40vw";
        document.getElementById('weather')!.style.width = "40vw";
        document.getElementById('weather')!.style.height = "40vw";
        document.getElementById('history')!.style.width = "40vw";
        document.getElementById('history')!.style.height = "40vw";
        document.getElementById('keyWord')!.style.width = "78vw";
        document.getElementById('address')!.style.backgroundColor = "transparent";
        document.getElementById('weather')!.style.backgroundColor = "transparent";
        document.getElementById('history')!.style.backgroundColor = "transparent";
        document.getElementById("back")!.style.display="none";
        const ModeReset = document.getElementById("back");
        if (ModeReset) {
            ModeReset.onclick=function () {
                document.getElementById('CategorySelect')!.style.display='inline';
                document.getElementById('addressFile')!.style.display='none';
                document.getElementById('weatherFile')!.style.display='none';
                document.getElementById('historyFile')!.style.display='none';
                ModeReset.style.display='none';
                nowMode=0;
            }
        }
        const address = document.getElementById('address');
        if (address) {
            address.onclick=function(){
                document.getElementById('back')!.style.display='inline'
                document.getElementById('CategorySelect')!.style.display='none'
                nowMode=1;
            }
        }
        const weather = document.getElementById('weather');
        if (weather) {
            weather.onclick=function(){
                document.getElementById('back')!.style.display='inline'
                document.getElementById('CategorySelect')!.style.display='none'
                nowMode=2;
            }
        }
        const history = document.getElementById('history');
        if (history) {
            history.onclick=function(){
                document.getElementById('back')!.style.display='inline'
                document.getElementById('CategorySelect')!.style.display='none'
                nowMode=3;
            }
        }
        const searchButtom = document.getElementById('search');
        if (searchButtom) {
            searchButtom.onclick=function(){
                document.getElementById('back')!.style.display='inline'
                if (nowMode==0) {
                    document.getElementById('CategorySelect')!.style.display='none'
                }
            }
        }
    })
    return (
      <>
        <div>
          <button id="back">戻る</button>
          <div id="home">
            <div id="word" style={{display: "inline"}}>
                <input id="keyWord" placeholder="キーワードから検索" style={{width: 'calc(70vw - 70px)',height:'30px'}} />
                <button id="search" style={{width: "60px",height: "30px",fontSize:'13px'}}>検索</button>
            </div>
            <div id="CategorySelect">
              <button id="address"><img src={addressImage} style={{ width: '100%', height: '100%'}}/></button>
              <button id="weather"><img src={weatherImage} style={{ width: '100%', height: '100%' }}/></button>
              <button id="history"><img src={historyImage} style={{ width: '100%', height: '100%' }}/></button>
            </div>
          </div>
          <ul id="AllFile"></ul>
          <div id="addressCategory">
            <ul id="addressFile"></ul>
          </div>
          <div id="weatherCategory">
            <ul id="weatherFile"></ul>
          </div>
          <div id="history">
            <ul id="historyFile"></ul>
          </div>
          <div className="bg_pattern Diagonal"></div>
        </div>
      </>
    );
}
export default App;
const CategorySelect=document.getElementById('CategorySelect');
const data: {
    曲名: string;
    地域: string;
    天気: string;
    ファイル: string;
  }[] = [
    {"曲名":"大阪晴れ","地域":"大阪府,null,null,null,null","天気":"晴れ","ファイル":""},
    {"曲名":"大阪雨","地域":"大阪府,null,null,null,null","天気":"雨","ファイル":""},
    {"曲名":"京都晴れ","地域":"京都府,null,null,null,null","天気":"晴れ","ファイル":""},
    {"曲名":"京都雨","地域":"京都府,null,null,null,null","天気":"雨","ファイル":""}
  ];
  interface Result {
    name: string;
    point: number;
    put: string;
  }
  let result: Result[] = [];
  
function SearchAll(name:String,address:String,weather:String) {
    if (nowMode==0) {
        
    }
}
