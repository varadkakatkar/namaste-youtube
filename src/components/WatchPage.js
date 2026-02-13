import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { clearSearch } from "../utils/searchSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(clearSearch());
  }, [dispatch]);

  useEffect(() => {
    if (videoId) {
      document.title = `YouTube - ${videoId}`;
    }
  }, [videoId]);
  return (
    <div className="flex justify-center m-10 p-10 w-full">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
