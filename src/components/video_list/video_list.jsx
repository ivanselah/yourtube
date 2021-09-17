import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onSelected, onSearchCount, searchCheck }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId ? video.id.videoId : video.id}
            videoId={video.id.videoId ? video.id.videoId : video.id}
            video={video}
            onSelected={onSelected}
            onSearchCount={onSearchCount}
            searchCheck={searchCheck}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
