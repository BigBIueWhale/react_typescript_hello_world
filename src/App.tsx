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

function App(): JSX.Element {
  {/* Load text from the server at "http://54.243.56.11/text.txt" */}
  const text: JSX.Element = useTextLoader("/text.txt");
  return (
    <div className="App">
      <h1>This is a HTML h1 header</h1>
      <h3><u>yey</u></h3>
      <p>This is a HTML paragraph</p>
      {text}
    </div>
  );
}

export default App;
