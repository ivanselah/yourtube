import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video }) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
    },
  } = video;
  const { snippet } = video;
  return (
    <li className={styles.container}>
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
