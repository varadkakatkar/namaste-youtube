import React, { useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import { randomName, makeRandomMessage } from '../utils/helper';
import { useRef } from 'react';

const LiveChatContainer = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const messages = useSelector((state) => state.chat.messages);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        const message = inputRef.current.value;

        dispatch(addMessage({
            name: "Amit",
            message: message,
            timestamp: Date.now()
        }))
        inputRef.current.value = '';
    }

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: "Amit",
                message: makeRandomMessage(20),
                timestamp: Date.now()
            }));
        }, 5000);
        return () => clearInterval(timer);
    }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col border border-gray-200 min-h-0 f">
        <h2 className="text-2xl font-bold shrink-0">Live Chat</h2>
        <div className="w-full flex-1 min-h-0 overflow-y-auto border border-gray-200 flex flex-col-reverse">
            {messages.map((message, index) => (
                <ChatMessage key={index} name={message.name} message={message.message} timestamp={message.timestamp}/>  
            ))}
        </div>

        <form onSubmit={handleSubmit} className="w-full flex items-center p-2">
            <input ref={inputRef} type="text" className="w-full border border-gray-200 rounded-md p-2" placeholder="Enter your message"/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>   
        </form>
    </div>
    
  )
}

export default LiveChatContainer