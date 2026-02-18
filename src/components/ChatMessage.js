import React from 'react'

const ChatMessage = ({name, message, timestamp}) => {
  return (
    <div className="m-2 shadow-lg p-2 rounded-lg bg-gray-100 ml-2">
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="profile" />
            <div className="flex flex-col ml-2">
                <span className="font-bold">{name}</span>
                <span className="text-sm">{message}</span>
                {timestamp && <span className="text-xs text-gray-500">{new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>}
            </div>
        </div>
    </div>
  )
}

export default ChatMessage
export { ChatMessage }