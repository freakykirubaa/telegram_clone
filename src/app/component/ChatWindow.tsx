'use client';
import { useState, useEffect } from 'react';
import { fetchMessages } from '../lib/api';

interface Message {
  id: string;
  sender_id: number;
  sender: {
    name: string;
  };
  message: string;
  created_at: string;
}

interface ChatWindowProps {
  chatId: string | null;
  onBack: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatId, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!chatId) return;

    const getMessages = async () => {
      try {
        const messageData = await fetchMessages(chatId);
        setMessages(messageData || []);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
        setMessages([]);
      }
    };

    getMessages();
  }, [chatId]);

  return (
    <div className="w-full md:w-full h-full bg-[#0F0F0F] flex flex-col">
      <div className="p-4 text-lg font-semibold bg-[#212121] text-white flex justify-between items-center">
        <button className="md:hidden text-gray-500" onClick={onBack}>
          Back
        </button>
        <span>Chat</span>
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">No messages to display.</div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 mb-4 rounded-lg text-white max-w-lg ${
                message.sender_id === 1 ? 'bg-[#766AC8] ml-auto' : 'bg-[#333333] mr-auto'
              }`}
            >
              <div className="font-semibold text-[#76B947]">
                {message.sender.name || 'Anonymous'}
              </div>
              <div>{message.message}</div>
              <div className="text-xs text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
