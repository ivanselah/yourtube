import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, onSelected, parseIntView, diffDate }) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
    },
  } = video;
  const { snippet } = video;
  const handleCilck = () => {
    window.scrollTo(0, 0);
    onSelected(video);
  };

  return (
    <li className={styles.container} onClick={handleCilck}>
      <div className={styles.video}>
        <img className={styles.thumbanils} src={url} alt="thumbanils" />
        <div className={styles.metadata}>
          <p className={styles.title}>
            {video.snippet.title.length > 40
              ? `${video.snippet.title.substr(0, 35)}...`
              : video.snippet.title}
          </p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <div className={styles.count}>
            <span>{`조회수 ${parseIntView(
              video.statistics.viewCount
            )}회 `}</span>
            <span>{`· ${diffDate(video.snippet.publishedAt)}전`}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
