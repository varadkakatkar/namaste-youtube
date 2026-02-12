import React from 'react'

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const thumbnail = snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.default?.url || snippet?.thumbnails?.high?.url || snippet?.thumbnails?.standard?.url
  const title = snippet?.title || '';
  const channelTitle = snippet?.channelTitle || '';
  const viewCount = statistics?.viewCount || '0';

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnail} />
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{parseInt(viewCount).toLocaleString()} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;