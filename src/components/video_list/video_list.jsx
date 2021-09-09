import React from "react";
import Videoitem from "../video_item/video_item";

const Videolist = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => {
        return <Videoitem key={video.id} video={video} />;
      })}
    </ul>
  );
};

export default Videolist;
