import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./component/Button";
function App() {
  const [display, setDisplay] = useState("");
  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "00",
    "/",
  ];

  const evaulate = () => {
    let result = eval(display);
    setDisplay(result);
  };
  return (
    <div className="flex h-[100vh] bg-slate-200 justify-center items-center">
      <div className=" w-80  border bg-white rounded-2xl p-5 px-10">
        <div className="  border border-gray-400 p-4 text-end text-xl font-semibold bg-slate-200 rounded-xl h-20">
          {display}
        </div>
        <div className="m-2 flex justify-between">
          <Button data={"Ac"} onClick={() => setDisplay("")} />
          <Button data={"="} onClick={() => evaulate()} />
        </div>
        <div className="flex flex-wrap gap-3">
          {buttons.map((item) => (
            <Button
              data={item}
              onClick={() => setDisplay((prev) => prev + item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
