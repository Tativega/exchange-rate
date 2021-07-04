import styles from "./styles";
// import { useWs } from "./useWs";
// import { io } from "socket.io-client";
import { useEffect } from "react";
const Home = () => {
  // const [price, setPrice] = useState("");
  // const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    const socket = new WebSocket(
      "ws://stream.tradingeconomics.com/?client=guest:guest"
    );
    // const socket = io("wss://stream.tradingeconomics.com/?client=guest:guest");

    console.log(socket);
    socket.onopen = () => {
      socket.send({ topic: "subscribe", to: "EURUSD" });
    };

    socket.onmessage = (e) => {
      console.log("e", e);
      // const { price, dt } = JSON.parse(e.data);

      // // if (price && dt) {
      // const date = new Date(dt).toLocaleString();
      // setTimeStamp(date);
      // setPrice(price);
      // // }
    };

    // socket.onclose = () => {
    //   socket.close();
    // };
  }, []);

  return (
    <styles.MainContent>
      {/* <styles.VideoWrapper>
        <video
          playsInline
          autoPlay
          muted="muted"
          loop="loop"
          style={{ width: "100%" }}
        >
          <source
            src="https://public.ortex.com/wp-content/uploads/2020/09/iStock-1002667230-1.mp4"
            type="video/mp4"
          />
        </video>
      </styles.VideoWrapper> */}
      <h1 style={{ position: "absolute", color: "#000" }}>hola</h1>
    </styles.MainContent>
  );
};

export default Home;
