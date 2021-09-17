import React from "react";
import styles from "./video_detail.module.css";

const VideoDetailAfterSearch = ({ videoStatistics, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div>⭐</div>
      ) : (
        <div className={styles.description}>
          <span className={styles.tags}>
            {videoStatistics.snippet.tags &&
              videoStatistics.snippet.tags.map((tag) => {
                const kr = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
                if (kr.test(tag)) {
                  return ` #${tag}`;
                }
              })}
          </span>
          <h3>{videoStatistics.snippet.title}</h3>
          <div className={styles.statistics}>
            <div className={styles.views}>
              {`조회수
          ${videoStatistics.statistics.viewCount //
            .replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}회 · ${videoStatistics.snippet.publishedAt
                .split("T")[0] //
                .replace(/-/g, ".")} `}
            </div>
            <div className={styles.likeUnlike}>
              {videoStatistics.statistics.likeCount && (
                <div className={styles.like}>
                  <i className="far fa-thumbs-up"></i>
                  {`
                  ${videoStatistics.statistics.likeCount //
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
              )}
              {videoStatistics.statistics.dislikeCount && (
                <div className={styles.unlike}>
                  <i className="far fa-thumbs-down"></i>
                  {`
                  ${videoStatistics.statistics.dislikeCount //
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                </div>
              )}
            </div>
          </div>
          <hr />
          <span className={styles.channelTitle}>
            {videoStatistics.snippet.channelTitle}
          </span>
          <hr />
          <span className={styles.comment}>
            {videoStatistics.statistics.commentCount &&
              `댓글 ${videoStatistics.statistics.commentCount //
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개`}
          </span>
        </div>
      )}
    </>
  );
};

export default VideoDetailAfterSearch;
