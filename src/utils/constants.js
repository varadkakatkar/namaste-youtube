const GOOGLE_API_KEY = "AIzaSyBGFUXGlEiKgr8yZB4nivDciT3ABeAQ8qc";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&maxResults=50`;
export const YOUTUBE_VIDEOS_BY_ID_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&q=`;

export const LIVE_CHAT_MESSAGE_COUNT = 10;