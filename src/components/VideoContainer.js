import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_API, YOUTUBE_VIDEOS_BY_ID_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { searchQuery, searchVideoIds } = useSelector((store) => store.search);

  useEffect(() => {
    if (searchVideoIds.length > 0) {
      getVideosByIds(searchVideoIds);
    } else if (searchQuery.trim()) {
      getSearchVideos(searchQuery);
    } else {
      getVideos();
    }
  }, [searchQuery, searchVideoIds]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items || []);
  };

  const getVideosByIds = async (videoIds) => {
    try {
      const res = await fetch(`${YOUTUBE_VIDEOS_BY_ID_API}&id=${videoIds.join(",")}`);
      const json = await res.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Fetch videos by ID failed:", error);
      setVideos([]);
    }
  };

  const getSearchVideos = async (query) => {
    try {
      const searchRes = await fetch(`${YOUTUBE_SEARCH_API}${encodeURIComponent(query)}`);
      const searchJson = await searchRes.json();
      const videoIds = searchJson?.items?.filter((item) => item.id?.kind === "youtube#video")?.map((item) => item.id?.videoId)?.filter(Boolean) ?? [];
      if (videoIds.length === 0) {
        setVideos([]);
        return;
      }
      await getVideosByIds(videoIds);
    } catch (error) {
      console.error("Search videos fetch failed:", error);
      setVideos([]);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          {" "}
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
