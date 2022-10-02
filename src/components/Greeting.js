import React, { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <>
      <div>Hello World !</div>
      {!changedText && <Output>it's Good To see you !</Output>}
      {changedText && <Output>changed</Output>}

      <button onClick={changeTextHandler}>Change Text</button>

      <ul>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Greeting;
