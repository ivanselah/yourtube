import React, { useEffect, useState, useCallback, useRef } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";
import Loader from "./components/video_loader/video_loader";

function App({ youtube }) {
  const scrollTargetRef = useRef();
  const [videos, setVideos] = useState();
  const [popularVideos, setPopularVideos] = useState([]);

  const [searchQ, setSearchQ] = useState(null);
  const [nextPageTok, setNextPageTok] = useState(null);
  const [videosKey, setVideosKey] = useState();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [youtubeId, setYoutubeId] = useState();
  const [searchCheck, setSearchCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialRander();
  }, []);

  useEffect(() => {
    if (scrollTargetRef.current) {
      createObserver();
    }
  }, [isLoading, nextPageTok]);

  const initialRander = async () => {
    try {
      const {
        data: { items },
      } = await youtube.mostPopular();
      setPopularVideos(items);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const createObserver = () => {
    const target = scrollTargetRef.current;
    const options = {
      root: null,
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && searchQ) {
        nextTokenVideos(searchQ);
        observer && observer.disconnect();
      }
    }, options);
    observer.observe(target);
  };

  const nextTokenVideos = async (keyword) => {
    try {
      const { data } = await youtube.nextSearch(keyword, nextPageTok);
      const results = data.items.map((item) => item.id.videoId);
      const overlap = results.filter((item) => !videosKey.includes(item));
      const nextToken = data.nextPageToken;
      setNextPageTok(nextToken);
      onScrollCount(overlap);
      setVideosKey(overlap);
    } catch {}
  };
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

  const getComments = async (youtubeId) => {
    try {
      const {
        data: { items },
      } = await youtube.comment(youtubeId);
      const results = items.map((item) => {
        return item.snippet.topLevelComment.snippet;
      });
      setComments(results);
    } catch {}
  };

  const onSelected = (video) => {
    setSelectedVideo(video);
    setYoutubeId(video.id);
    getComments(video.id);
  };

  const onScrollCount = async (results) => {
    try {
      const response = await Promise.all(
        results.map((id) => {
          return youtube.searchCount(id);
        })
      );
      const addVideos = response.map((video) => video.data.items[0]);
      setVideos([...videos, ...addVideos]);
    } catch {}
  };

  const onSearchCount = async (results) => {
    setIsLoading(true);
    try {
      const response = await Promise.all(
        results.map((id) => {
          return youtube.searchCount(id);
        })
      );
      const addVideos = response.map((video) => video.data.items[0]);
      setVideos(addVideos);
    } catch {
    } finally {
      setSearchCheck(true);
      setIsLoading(false);
    }
  };

  const onSearch = async (keyword) => {
    if (keyword === searchQ) {
      return;
    } else {
      setSearchQ(keyword);
      setIsLoading(true);
      setSelectedVideo(null);
    }
    try {
      const { data } = await youtube.search(keyword);
      const results = data.items.map((item) => item.id.videoId);
      const preToken = data.nextPageToken;
      setVideosKey(results);
      setNextPageTok(preToken);
      onSearchCount(results);
    } catch {
    } finally {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <VideoSearch onSearch={onSearch} />
      {isLoading ? (
        <Loader />
      ) : selectedVideo ? (
        <VideoDetail
          youtubeId={youtubeId}
          comments={comments}
          parseIntView={parseIntView}
          diffDate={diffDate}
          isLoading={isLoading}
          selectedVideo={selectedVideo}
          videos={searchQ ? videos : popularVideos}
          onSelected={onSelected}
        />
      ) : (
        <VideoList
          scrollTargetRef={scrollTargetRef}
          parseIntView={parseIntView}
          diffDate={diffDate}
          isLoading={isLoading}
          videos={searchQ ? videos : popularVideos}
          onSelected={onSelected}
          searchCheck={searchCheck}
        />
      )}
    </>
  );
}

export default App;
