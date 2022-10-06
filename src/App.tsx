import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import Axios from "axios";

function useTextLoader(url: string): JSX.Element {
  const [text, setText] = useState("");
  useEffect(() => {
    Axios.get(url)
      .then((response: any) => {
        setText(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, [url]);
  return (
    <p>
      Text loaded from "{url}": "{text}"
    </p>
  );
}

// Create statically-typed props for the button component
interface ButtonProps {
  text: string;
  onClick: () => void;
}

// Create button component
function useButton(props: ButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick} className="button">
      {props.text}
    </button>
  );
}

function App(): JSX.Element {
  {/* Load text from the server at "http://54.243.56.11/text.txt" */}
  const text: JSX.Element = useTextLoader("/text.txt");
  // Create props
  const buttonProps: ButtonProps = {
    text: "Click me!",
    onClick: () => {
      alert("You clicked the button!");
    },
  };
  // Create button
  const button: JSX.Element = useButton(buttonProps);
  return (
    <div className="App">
      <h1>This is a HTML h1 header</h1>
      <h3><u>yey</u></h3>
      {button}
      <p>This is a HTML paragraph</p>
      {text}
    </div>
  );
}

export default App;
