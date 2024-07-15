'use client';
import { useState, useEffect } from 'react';
import { Chat, fetchAllChats } from '../lib/api';
import HamburgerMenu from './HamburgerMenu';


interface ChatListProps {
    onSelectChat: (chatId: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat }) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

    useEffect(() => {
        const getChats = async () => {
            const chatData = await fetchAllChats();
            setChats(chatData);
        };
        getChats();
    }, []);

    const handleChatClick = (chatId: string) => {
        onSelectChat(chatId);
        setSelectedChatId(chatId);
    };

    return (
        <div className="w-full md:w-full h-full bg-[#0F0F0F] overflow-y-hidden border-r border-gray-700">
            <div className="p-4 text-lg font-semibold bg-[#212121] text-white flex gap-x-2 ">
            <HamburgerMenu />
                <span>Telegram</span>
             
            </div>
            <ul className="pt-20 p-4 overflow-y-auto h-full">
                {chats.length === 0 ? (
                    <li className="p-4 border-b text-center text-gray-500">No chats available</li>
                ) : (
                    chats.map((chat) => (
                        <li
                            key={chat.id}
                            onClick={() => handleChatClick(chat.id)}
                            className={`p-4 cursor-pointer text-white rounded-[6px] ${
                                selectedChatId === chat.id ? 'bg-[#766AC8]' : 'hover:bg-[#1C1C1E]'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#212121] rounded-full flex items-center justify-center text-white font-bold">
                                    {chat.creator.name ? chat.creator.name.charAt(0) : 'A'}
                                </div>
                                <div className="ml-3">
                                    <div className="font-semibold text-[#76B947]">{chat.creator.name || 'Anonymous'}</div>
                                    <div className="text-sm text-gray-400">{chat.last_message || 'Messages..'}</div>
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ChatList;
