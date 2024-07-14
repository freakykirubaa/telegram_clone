'use client'
import { useState } from 'react';
import ChatList from './component/ChatList';
import ChatWindow from './component/ChatWindow';

export default function Home() {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className="flex h-screen bg-gray-700">
            <div className={`${selectedChat ? 'hidden md:block' : 'block'} w-full md:w-1/3`}>
                <ChatList onSelectChat={setSelectedChat} />
            </div>
            <div className={`${selectedChat ? 'block' : 'hidden md:block'} w-full md:w-2/3`}>
                <ChatWindow chatId={selectedChat} onBack={() => setSelectedChat(null)} />
            </div>
        </div>
    );
}
