import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket("wss://192.168.11.14:5173");
    ws.onopen = () => {
      setSocket(ws);
    };
    ws.onmessage = (message) => {
      setCount(parseInt(message.data, 10));
    };
    return () => {
      ws.close();
    };
  }, []);

  const increment = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket?.send((count + 1).toString());
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
