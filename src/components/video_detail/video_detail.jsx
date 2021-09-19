import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({
  parseIntView,
  diffDate,
  selectedVideo,
  videos,
  onSelected,
}) => {
  const youtubeId = selectedVideo.id.videoId
    ? selectedVideo.id.videoId
    : selectedVideo.id;

  const clickVideoList = (video) => {
    window.scrollTo(0, 0);
    onSelected(video);
  };

  return (
    <section className={styles.detail}>
      <div>
        <iframe
          title="content"
          className={styles.player}
          allow="fullscreen"
          frameBorder="0"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        ></iframe>
        <div className={styles.description}>
          <span className={styles.tags}>
            {selectedVideo.snippet.tags &&
              selectedVideo.snippet.tags.map((tag, index) => {
                const kr = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
                if (kr.test(tag)) {
                  if (index <= 20) {
                    return ` #${tag}`;
                  }
                }
              })}
          </span>
          <h3>{selectedVideo.snippet.title}</h3>
          <div className={styles.statistics}>
            <div className={styles.views}>
              {`조회수 
          ${selectedVideo.statistics.viewCount //
            .replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}회 · ${selectedVideo.snippet.publishedAt
                .split("T")[0] //
                .replace(/-/g, ".")} `}
            </div>
            <div className={styles.likeUnlike}>
              {selectedVideo.statistics.likeCount && (
                <div className={styles.like}>
                  <i className="far fa-thumbs-up"></i>
                  {`
                  ${selectedVideo.statistics.likeCount //
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
              )}
              {selectedVideo.statistics.dislikeCount && (
                <div className={styles.unlike}>
                  <i className="far fa-thumbs-down"></i>
                  {`
                  ${selectedVideo.statistics.dislikeCount //
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
              )}
            </div>
          </div>
          <hr />
          <span className={styles.channelTitle}>
            {selectedVideo.snippet.channelTitle}
          </span>
          <hr />
          <span className={styles.comment}>
            {selectedVideo.statistics.commentCount &&
              `댓글 ${selectedVideo.statistics.commentCount //
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개`}
          </span>
        </div>
      </div>
      <ul className={styles.videoList}>
        {videos.map((video) => {
          return (
            <li
              key={video.id}
              className={styles.container}
              onClick={() => clickVideoList(video)}
            >
              <div className={styles.video}>
                <img
                  className={styles.thumbanils}
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbanils"
                />
                <div className={styles.hoverVideo}></div>
                <div className={styles.metadata}>
                  <p className={styles.title}>
                    {video.snippet.title.length > 40
                      ? `${video.snippet.title.substr(0, 35)}...`
                      : video.snippet.title}
                  </p>
                  <p className={styles.channel}>{video.snippet.channelTitle}</p>
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
        })}
      </ul>
    </section>
  );
};

export default VideoDetail;
