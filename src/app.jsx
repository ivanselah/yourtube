import React, { useEffect, useState, useCallback } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";
import Loader from "./components/video_loader/video_loader";

function App({ youtube }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchCheck, setSearchCheck] = useState(false);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseIntView = (view) => {
    if (view >= 10000) {
      return `${parseInt(view / 10000)}만`;
    } else {
      return view;
    }
  };

  const diffDate = useCallback((date) => {
    const curDate = new Date().getTime();
    const itemDate = new Date(date).getTime();
    let diff = curDate - itemDate;
    diff = parseInt(diff / (1000 * 60 * 60));
    if (diff < 24) {
      return diff + "시간";
    } else if (diff >= 24 && diff < 168) {
      return parseInt(diff / 24) + "일";
    } else if (diff >= 168 && diff < 672) {
      return parseInt(diff / 168) + "주";
    } else if (diff >= 672 && diff < 8760) {
      return parseInt(diff / 672) + "개월";
    } else if (diff >= 8760) {
      return parseInt(diff / 8760) + "년";
    }
  }, []);

  const onSelected = (video) => {
    setSelectedVideo(video);
  };

  const onSearchCount = async (results) => {
    try {
      const response = await Promise.all(
        results.map((id) => {
          return youtube.searchCount(id);
        })
      );
      const videos = response.map((video) => video.data.items[0]);
      setVideos(videos);
    } catch (error) {
      console.log("❌", error);
    } finally {
      setSearchCheck(true);
      setIsLoading(false);
    }
  };

  const onSearch = async (keyword) => {
    setIsLoading(true);
    setSelectedVideo(null);
    try {
      const {
        data: { items },
      } = await youtube.search(keyword);
      const results = items.map((item) => item.id.videoId);
      onSearchCount(results);
    } catch {}
  };

  const initialRander = async () => {
    try {
      const {
        data: { items },
      } = await youtube.mostPopular();
      setVideos(items);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialRander();
  }, []);

  return (
    <>
      <VideoSearch onSearch={onSearch} />
      {isLoading ? (
        <Loader />
      ) : selectedVideo ? (
        <VideoDetail
          parseIntView={parseIntView}
          diffDate={diffDate}
          isLoading={isLoading}
          selectedVideo={selectedVideo}
          videos={videos}
          onSelected={onSelected}
        />
      ) : (
        <VideoList
          parseIntView={parseIntView}
          diffDate={diffDate}
          isLoading={isLoading}
          videos={videos}
          onSelected={onSelected}
          searchCheck={searchCheck}
        />
      )}
    </>
  );
}

export default App;
