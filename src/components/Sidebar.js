import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg auto-rows-max">
      <ul className="flex flex-col mb-4 auto-rows-max gap-1">
        <li>
          <Link to="/">Home
          </Link>
          </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Originals</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
        <li>YouTube TV</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <h1 className="font-bold mb-4">Subscriptions</h1>
      <ul className="flex flex-col mb-4 auto-rows-max gap-1 py-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>TV</li>
        <li>News</li>
        <li>Podcasts</li>
        <li>Comedy</li>
        <li>Education</li>
        <li>Technology</li>
        <li>Science</li>
        <li>History</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold mt-4">Watch Later</h1>
      <ul className="flex flex-col mb-4 auto-rows-max gap-1 py-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>TV</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
