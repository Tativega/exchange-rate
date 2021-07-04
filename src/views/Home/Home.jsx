import styles from "./styles";
import { useEffect, useState } from "react";
const Home = () => {
  const [price, setPrice] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const currencyPair = "eurusd";

  useEffect(() => {
    const subscribe = {
      event: "bts:subscribe",
      data: {
        channel: `live_orders_${currencyPair}`,
      },
    };
    const ws = new WebSocket("wss://ws.bitstamp.net");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      const { datetime = "", price = "" } = response?.data;
      if (datetime) {
        const locale = new Date(datetime * 1000);
        setTimeStamp(locale.toGMTString());
      }
      setPrice(Number.parseFloat(price).toFixed(3));
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, []);
  return (
    <styles.MainContent>
      <styles.VideoWrapper>
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
      </styles.VideoWrapper>
      <styles.Data>{timeStamp}</styles.Data>
      <styles.Data>1 Euro / {price} Dolar</styles.Data>
    </styles.MainContent>
  );
};

export default Home;
