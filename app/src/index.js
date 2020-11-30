import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import history from "./helpers/history";
import Menu from "./components/menu/Menu";
import MenuButton from "./components/menuButton/MenuButton";
import {
  faHeartbeat,
  faLungs,
  faDiagnoses,
  faSpa,
  faChild,
} from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Menu>
        <MenuButton
          navTo={"/heartbeat"}
          icon={faHeartbeat}
          name={"Hearthbeat"}
        />
        <MenuButton navTo={"/skin"} icon={faDiagnoses} name={"Skin"} />
        <MenuButton navTo={"/breath"} icon={faLungs} name={"Breath"} />
        <MenuButton navTo={"/muscles"} icon={faChild} name={"Muscles"} />
        <MenuButton navTo={"/general"} icon={faSpa} name={"General"} />
      </Menu>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
