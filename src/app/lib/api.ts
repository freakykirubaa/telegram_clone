'use client';
import axios from 'axios';

export interface Chat {
    id: string;
    creator: {
        name: string;
    };
    last_message: string;
}

export interface Message {
    id: string;
    sender_id: number;
    sender: {
        name: string;
    };
    message: string;
    created_at: string;
}

export const fetchAllChats = async (): Promise<Chat[]> => {
    let allChats: Chat[] = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
        try {
            const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
            const chatData: Chat[] = response.data.data.data;

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

    const uniqueChats = Array.from(new Set(allChats.map(chat => chat.id)))
        .map(id => allChats.find(chat => chat.id === id) as Chat);

    return uniqueChats;
};

export const fetchMessages = async (chatId: string): Promise<Message[]> => {
    try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        return response.data.data as Message[];
    } catch (error) {
        console.error("Failed to fetch messages:", error);
        return [];
    }
};
