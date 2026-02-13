import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { setSearchQuery as setSearchQueryAction, setSearchFromSuggestion } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchSuggestionIds, setSearchSuggestionIds] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchSuggestions([]);
      setSearchSuggestionIds([]);
      setShowSuggestions(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      getSearchSuggestion(searchQuery);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const getSearchSuggestion = async (query) => {
    try {
      const res = await fetch(`${YOUTUBE_SEARCH_API}${encodeURIComponent(query)}`);
      const json = await res.json();
      const items = json?.items?.filter((item) => item.id?.kind === "youtube#video") ?? [];
      const suggestions = items.map((item) => item.snippet?.title).filter(Boolean);
      const videoIds = items.map((item) => item.id?.videoId).filter(Boolean);
      setSearchSuggestions(suggestions);
      setSearchSuggestionIds(videoIds);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Search suggestion fetch failed:", error);
      setSearchSuggestions([]);
      setSearchSuggestionIds([]);
    }
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="hamburger-menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <a href="/">
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://i.pinimg.com/736x/10/0d/92/100d925f120c7b3c1a53b2aaea2ec11c.jpg"
        />
        </a>
      </div>
      
      <div className="col-span-10 px-10 flex items-center justify-center">
        <div className="relative flex w-1/2">
          <input
            type="text"
            id="search"
            className="flex-1 border border-gray-300 px-3 py-1 rounded-l-full focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") dispatch(setSearchQueryAction(searchQuery));
            }}
          />
          <button
            className="bg-gray-100 px-3 py-1 rounded-r-full border border-gray-300 hover:bg-gray-200"
            onClick={() => dispatch(setSearchQueryAction(searchQuery))}
          >
            🔍
          </button>
          {showSuggestions && searchQuery && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 w-full max-w-[400px] z-50">
              {searchSuggestions.length > 0 ? (
                searchSuggestions.map((suggestion, idx) => (
                  <div
                    key={`${suggestion}-${idx}`}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-800"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                      dispatch(setSearchFromSuggestion({ query: suggestion, videoIds: searchSuggestionIds }));
                    }}
                  >
                    <span className="text-gray-500">🔍</span>
                    {suggestion}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">No suggestions found</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
        />
      </div>
    </div>
  );
};

export default Head;
