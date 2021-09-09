import React from "react";

const Videoitem = ({ video }) => {
  return (
    <>
      <h1>{video.snippet.title}</h1>
    </>
  );
};

export default Videoitem;
