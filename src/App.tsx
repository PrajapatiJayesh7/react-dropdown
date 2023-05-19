import React, { useState } from "react";
import ReactDropdown from "./packages/ReactDropdown/ReactDropdown";
// import { FaGithub } from "react-icons/fa";
// import ReactDropdown from "react-beautiful-dropdown"

import S from "./Styles";

function App() {
  const [string, setString] = useState<string>("");
  const [options] = useState([
    { id: "1", label: "Grinning face 😀" },
    { id: "2", label: "Grinning face with big eyes 😃	" },
    { id: "3", label: "Beaming face with smiling eyes 😁" },
    { id: "4", label: "Smiling face with halo 😇" },
    { id: "5", label: "Star-struck 🤩" },
    { id: "6", label: "Crazy face with tongue out 🤪" },
    { id: "7", label: "Face in clouds 😶‍🌫️" },
    { id: "8", label: "Relieved face 😌" },
    { id: "9", label: "Miling face with sunglasses 😎" },
    { id: "10", label: "Alien monster 👾" },
  ]);

  const inputHandler = (val: string) => {
    // console.log(val)
    setString(val);
  };

  return (
    <S.App>
      <S.ContentCtr>
        <br />
        <h1>react-dropdown</h1>
        <br />
        <p>
          A completely customisable React dropdown component, <br />
        </p>
        <br />
        <br />
        <ReactDropdown
          value={string}
          options={options}
          valueHandler={inputHandler}
          // validator={(val) => val.includes("hel")}
          placeholder="Type or select value here. . ."
          error={{ isError: false, errorText: "Error" }}
          // customInputStyles={{}}
          // customDropdownItemStyles={{}}
        />
      </S.ContentCtr>
    </S.App>
  );
}

export default App;
