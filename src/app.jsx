import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchCheck, setSearchCheck] = useState(false);

  const onSelected = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = (keyword) => {
    youtube
      .search(keyword) //
      .then((result) => setVideos(result));
  };

  const onSearchCount = (videoId) => {
    setSearchCheck(true);
    youtube
      .searchCount(videoId) //
      .then((result) => setVideoCount(result));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result));
  }, []);

  return (
    <>
      {console.log(videoCount)}
      <VideoSearch search={onSearch} />
      {selectedVideo ? (
        <VideoDetail
          selectedVideo={selectedVideo}
          videos={videos}
          searchCheck={searchCheck}
          videoCount={videoCount && videoCount}
          onSelected={onSelected}
          onSearchCount={onSearchCount}
        />
      ) : (
        <VideoList
          videos={videos}
          videoCount={videoCount && videoCount}
          onSelected={onSelected}
          onSearchCount={onSearchCount}
          searchCheck={searchCheck}
        />
      )}
    </>
  );
}

export default App;
