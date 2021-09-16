import React, { useRef, useState } from "react";
import styles from "./video_search.module.css";

const VideoSearch = ({ search }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    search(inputRef.current.value);
    inputRef.current.value = "";
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <i className={`fab fa-youtube ${styles.logo}`}></i>
      <span>YourTube</span>
      <div className={styles.form}>
        <input
          type="text"
          ref={inputRef}
          placeholder="검색어를 입력하세요"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default VideoSearch;
