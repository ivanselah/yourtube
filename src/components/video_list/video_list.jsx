import React from "react";
import VideoItem from "../video_item/video_item";
import Loader from "../video_loader/video_loader";
import styles from "./video_list.module.css";

const VideoList = ({
  scrollTargetRef,
  parseIntView,
  diffDate,
  isLoading,
  videos,
  onSelected,
  searchCheck,
}) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.videosContainer}>
          <ul className={styles.videos}>
            {videos.map((video) => {
              return (
                <VideoItem
                  parseIntView={parseIntView}
                  diffDate={diffDate}
                  key={video.id}
                  videoId={video.id}
                  video={video}
                  onSelected={onSelected}
                  searchCheck={searchCheck}
                />
              );
            })}
          </ul>
          <div ref={scrollTargetRef} className={styles.targetObserver}>
            Hello
          </div>
        </div>
      )}
    </>
  );
};

export default VideoList;
