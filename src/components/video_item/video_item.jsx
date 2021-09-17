import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({
  videoId,
  video,
  onSelected,
  onStatistics,
  searchCheck,
}) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
    },
  } = video;
  const { snippet } = video;
  const handleCilck = () => {
    if (searchCheck) {
      onStatistics(videoId);
      onSelected(video);
    } else {
      onSelected(video);
    }
  };

  return (
    <li className={styles.container} onClick={handleCilck}>
      <div className={styles.video}>
        <img className={styles.thumbanils} src={url} alt="thumbanils" />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
