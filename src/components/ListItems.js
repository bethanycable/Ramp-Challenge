import { useState, useEffect } from "react";

function ListItems({ flag }) {
  const [displayChars, setDisplayChars] = useState([]);

  useEffect(() => {
    setDisplayChars([]);

    const timeouts = [];

    flag.split("").forEach((letter, index) => {
      const timeout = setTimeout(() => {
        setDisplayChars((prevDisplayChars) => [
          ...prevDisplayChars,
          <li key={index}>{letter}</li>
        ]);
      }, 500 * index);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [flag]);

  return <ul>{displayChars}</ul>;
}

export default ListItems;
