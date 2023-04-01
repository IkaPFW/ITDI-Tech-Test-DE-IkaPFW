import "./styles.css";
import { useState } from "react";

export default function App() {
  let [input, setInput] = useState(0);
  // let output = 0
  let [output, setOutput] = useState(0);

  async function handleInput() {
    //please put your logic here
    // console.log(input)
    let reverse = input.toString().includes("-")
      ? Number(
          "-" +
            input.toString().replaceAll("-", "").split("").reverse().join("")
        )
      : Number(input.toString().split("").reverse().join(""));

    // console.log(reverse)
    setOutput(Math.abs(reverse - input));
    // output = Math.abs(reverse - input)
  }

  function handleUpdate(e) {
    setInput(Number(e.target.value));
  }

  function excludeComa(e) {
    if (e.keyCode === 188 || e.keyCode === 190 || e.keyCode === 110) {
      e.preventDefault();
    }
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input
          onKeyDown={excludeComa}
          onChange={handleUpdate}
          type="number"
          id="input"
        />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div id="result">Result: {output}</div>
    </div>
  );
}
