'use client'
import axios from 'axios';

export const fetchAllChats = async () => {
    let allChats = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
        try {
            const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
            const chatData = response.data.data.data;

            if (chatData && chatData.length > 0) {
                allChats = [...allChats, ...chatData];
                page += 1;
            } else {
                hasMorePages = false;
            }
        } catch (error) {
            console.error("Failed to fetch chats:", error);
            hasMorePages = false;
        }
    }

    // Remove duplicates based on chat ID
    const uniqueChats = Array.from(new Set(allChats.map(chat => chat.id)))
        .map(id => allChats.find(chat => chat.id === id));

    return uniqueChats;
};

export const fetchMessages = async (chatId:any) => {
    try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch messages:", error);
        return [];
    }
};
