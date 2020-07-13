import "./styles/reset.css";
import "./styles/global.less";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";

ReactDOM.render(
  <div>
    <Header />
  </div>,
  document.getElementById("root")
);
