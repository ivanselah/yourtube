import React, { useEffect, useState, useCallback, useRef } from "react";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";
import VideoDetail from "./components/video_detail/video_detail";
import Loader from "./components/video_loader/video_loader";

function App({ youtube }) {
  const scrollTargetRef = useRef();
  const [itemsCount] = useState(50);
  const [videos, setVideos] = useState();
  const [popularVideos, setPopularVideos] = useState([]);

  const [searchQ, setSearchQ] = useState(null);
  const [nextPageTok, setNextPageTok] = useState();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [youtubeId, setYoutubeId] = useState();
  const [searchCheck, setSearchCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initialRander = async (itemsCount) => {
    try {
      const {
        data: { items },
      } = await youtube.mostPopular(itemsCount);
      setPopularVideos(items);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialRander(itemsCount);
  }, []);

  useEffect(() => {
    createObserver();
  }, []);

  const createObserver = () => {
    const target = scrollTargetRef.current;
    const options = {
      root: null,
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting === true) {
        nextTokenVideos(searchQ);
        console.log(entries[0].isIntersecting);
      }
    }, options);
    observer.observe(target);
  };

  const nextTokenVideos = async (keyword) => {
    if (!keyword) {
      return;
    } else {
      try {
        const { data } = await youtube.nextSearch(keyword, nextPageTok);
        const results = data.items.map((item) => item.id.videoId);
        setNextPageTok(data.nextPageToken);
        onSearchCount(results);
      } catch {}
    }
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

  const onSearchCount = async (results) => {
    try {
      const response = await Promise.all(
        results.map((id) => {
          return youtube.searchCount(id);
        })
      );
      const addVideos = response.map((video) => video.data.items[0]);
      if (!videos) {
        setVideos(addVideos);
      } else {
        setVideos([...videos, ...addVideos]);
      }
    } catch {
    } finally {
      setSearchCheck(true);
      setIsLoading(false);
    }
  };

  const onSearch = async (keyword) => {
    setSearchQ(keyword);
    setIsLoading(true);
    setSelectedVideo(null);
    try {
      const { data } = await youtube.search(keyword);
      const results = data.items.map((item) => item.id.videoId);
      setNextPageTok(data.nextPageToken);
      onSearchCount(results);
    } catch {}
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
      <div>
        <div ref={scrollTargetRef}>Hello</div>
      </div>
    </>
  );
}

export default App;
