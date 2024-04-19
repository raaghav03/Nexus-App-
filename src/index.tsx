import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskApp from "./TaskApp";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <TaskApp />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error('Root element with id "root" not found.');
}
