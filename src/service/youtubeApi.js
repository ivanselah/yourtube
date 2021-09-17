class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=25&regionCode=Kr&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };

  search = async (keyword) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&regionCode=Kr&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };

  searchCount = async (videoId) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };
}

export default Youtube;
