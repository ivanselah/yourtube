import React, { useRef, useState } from "react";
import styles from "./video_search.module.css";
import HamburgerMenu from "../video_hamburger/hamburger";
import Hamburger from "hamburger-react";

const VideoSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const handleSearch = () => {
    onSearch(inputRef.current.value);
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

  const toggleMe = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      {isOpen && <HamburgerMenu />}
      <header>
        <div className={styles.navbar}>
          <div className={styles.hamburger} onClick={toggleMe}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={35} />
          </div>
          <a href="/" className={styles.moveHome}>
            <i className={`fab fa-youtube ${styles.logo}`}></i>
            <span>YourTube</span>
          </a>
          <div className={styles.form}>
            <input
              type="text"
              ref={inputRef}
              placeholder="검색"
              onKeyPress={onKeyPress}
            />
            <button type="submit" onClick={onClick}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className={styles.defaultUser}>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default VideoSearch;
