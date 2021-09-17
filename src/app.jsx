import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [videoStatistics, setVideoStatistics] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchCheck, setSearchCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSelected = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = (keyword) => {
    setSearchCheck(true);
    setIsLoading(true);
    youtube
      .search(keyword) //
      .then((result) => setVideos(result));
  };

  const onStatistics = async (videoId) => {
    try {
      const result = await youtube.searchCount(videoId);
      setVideoStatistics(result[0]);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result));
  }, []);

  return (
    <>
      <VideoSearch search={onSearch} />
      {selectedVideo ? (
        <VideoDetail
          isLoading={isLoading}
          selectedVideo={selectedVideo}
          videoStatistics={videoStatistics}
          videos={videos}
          searchCheck={searchCheck}
          onSelected={onSelected}
          onStatistics={onStatistics}
        />
      ) : (
        <VideoList
          videos={videos}
          onSelected={onSelected}
          onStatistics={onStatistics}
          searchCheck={searchCheck}
        />
      )}
    </>
  );
}

export default App;
