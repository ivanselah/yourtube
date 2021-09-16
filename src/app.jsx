import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (keyword) => {
    youtube
      .search(keyword) //
      .then(setVideos);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, []);

  return (
    <>
      <VideoSearch search={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
