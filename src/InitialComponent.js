import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState("");
  const [displayChars, setDisplayChars] = useState([]);

  useEffect(() => {
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
      displayFlagChars();
    }, 1000);
  }, []);

  function displayFlagChars() {
    flag.split("").forEach((letter, index) =>
      setTimeout(() => {
        setDisplayChars((displayChars) => [
          ...displayChars,
          <li key={index}>{letter}</li>
        ]);
      }, 500 * index)
    );
  }

  return <div>{loading ? <h2>Loading...</h2> : <ul>{displayChars}</ul>}</div>;
}
