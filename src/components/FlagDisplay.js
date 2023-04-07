import { useState, useEffect } from "react";
import ListItems from "./ListItems";

function FlagDisplay() {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/70726f"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Request Error ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        setFlag(text);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <h2>Loading...</h2> : <ListItems flag={flag} />}</div>;
}

export default FlagDisplay;
