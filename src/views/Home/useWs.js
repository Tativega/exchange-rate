import { useState, useEffect } from "react";

export const useWs = () => {

    const [price, setPrice] = useState("");
    const [timeStamp, setTimeStamp] = useState("");

    useEffect(() => {
        const ws = new WebSocket("wss://stream.tradingeconomics.com/?client=guest:guest");
        console.log(ws);
        ws.onopen = (event) => {
            console.log(event)
            ws.send(JSON.stringify({
                topic: "subscribe",
                to: "EURUSD:CUR"
            }));
        };

        ws.onmessage = (e) => {
            console.log("e", e.data)
            const { price, dt } = JSON.parse(e.data);

            // if (price && dt) {
            const date = new Date(dt).toLocaleString();
            setTimeStamp(date);
            setPrice(price);
            // }
        };

        ws.onclose = () => {
            ws.close();
        };
    }, [])

    console.log(price)

    return { price, timeStamp }

}

