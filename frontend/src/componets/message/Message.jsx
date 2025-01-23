import React from 'react';
import useConversation from '../../Zustand/useConversation';
import { extractTime } from '../../utils/extractTime';
import { useAuthContext } from '../../context/AuthContext';

const Message = ({ message }) => {

    const { selectedConversation } = useConversation();
    const { authUser } = useAuthContext();
    const fromMe = message.senderId === authUser._id;
    const fromattedTime = extractTime(message.createAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    const shakeClass = message.shouldShake ? "shake" : "";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind css chat bubble component' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{fromattedTime}</div>

        </div>
    );
};

export default Message;
