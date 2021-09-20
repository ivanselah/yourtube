import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
    this.api = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: this.key,
        regionCode: "kr",
      },
    });
  }

  mostPopular = (itemsCount) => {
    const response = this.api.get("videos", {
      params: {
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: itemsCount,
      },
    });
    return response;
  };

  searchCount = (videoId) => {
    const response = this.api.get("videos", {
      params: {
        part: "snippet,statistics",
        id: videoId,
        maxResults: 24,
      },
    });
    return response;
  };

  search = (keyword) => {
    const response = this.api.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 24,
        q: keyword,
      },
    });
    return response;
  };

  comment = (videoId) => {
    const response = this.api.get("commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
        textFormat: "plainText",
        order: "time",
        maxResults: 24,
      },
    });
    return response;
  };
}

export default Youtube;
