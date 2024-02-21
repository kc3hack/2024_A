import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getIPAddresses } from "../utils/get-ipaddress";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState<Socket | null>(null);

  const ipAddresses = getIPAddresses();
  if (ipAddresses.length === 0)
    throw new Error("IPアドレスが見つかりませんでした。");
  const ip = ipAddresses[0];

  useEffect(() => {
    const socketIO = io(`https://${ip}:5174`, {
      withCredentials: true,
    });

    socketIO.on("connect", () => {
      setSocket(socketIO);
    });

    socketIO.on("message", (message) => {
      setCount(parseInt(message, 10));
    });

    return () => {
      socketIO.disconnect();
    };
  }, []);

  const increment = () => {
    if (socket && socket.connected) {
      socket.emit("message", (count + 1).toString());
      console.log("sent");
    }
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
