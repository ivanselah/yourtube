import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import Youtube from "./service/youtubeApi";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
