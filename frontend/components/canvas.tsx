// canvas.tsx
import "../styles/Value.css";
import React, { useRef, useEffect } from "react";
import { musicData } from "./data";
import { searchAuto } from "./data";

export const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 1000;
    context.clearRect(0, 0, 10000, 10000);

    const id = searchAuto("Clouds", "大阪府")[0].id; //idに曲のidを入力
    const prelocal: number = 5;

    console.log(10 - musicData[id].information[0]);
    console.log(
      canvas.height / 10 +
        ((((10 - musicData[id].information[0]) * canvas.height) / 10) * 7) / 10,
    );
    context.fillStyle = "red";
    context.fillRect(
      canvas.width / 10,
      canvas.height / 10 +
        ((((10 - musicData[id].information[0]) * canvas.height) / 10) * 7) / 10,
      (canvas.width * 2) / 10,
      (((musicData[id].information[0] * canvas.height) / 10) * 7) / 10,
    );
    context.fillStyle = "blue";
    context.fillRect(
      (canvas.width * 4) / 10,
      canvas.height / 10 +
        ((((10 - musicData[id].information[1]) * canvas.height) / 10) * 7) / 10,
      (canvas.width * 2) / 10,
      (((musicData[id].information[1] * canvas.height) / 10) * 7) / 10,
    );
    context.fillStyle = "green";
    context.fillRect(
      (canvas.width * 7) / 10,
      canvas.height / 10 + ((((10 - prelocal) * canvas.height) / 10) * 7) / 10,
      (canvas.width * 2) / 10,
      (((prelocal * canvas.height) / 10) * 7) / 10,
    );
    context.fillStyle = "black";
    context.fillText(
      "      活発      ",
      canvas.width / 10,
      (canvas.height * 9) / 10,
      canvas.width / 5,
    );
    context.fillText(
      "      冷静      ",
      (canvas.width * 4) / 10,
      (canvas.height * 9) / 10,
      canvas.width / 5,
    );
    context.fillText(
      "      地域度      ",
      (canvas.width * 7) / 10,
      (canvas.height * 9) / 10,
      canvas.width / 5,
    );
  }, []); //[活発,冷静,地域度]

  return <canvas ref={canvasRef} />;
};

const App: React.FC = () => {
  return (
    <div className="value">
      <CanvasComponent />
    </div>
  );
};

export default App;
