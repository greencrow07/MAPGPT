import React from 'react';
import { Message } from '../types';
import { getFormattedTime } from '../utils/helpers';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] md:max-w-[70%] lg:max-w-[60%] px-4 py-3 rounded-xl ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        }`}
      >
        <div className="flex flex-col">
          <span className="text-sm mb-1">{message.content}</span>
          <span className={`text-xs ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'} self-end`}>
            {getFormattedTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
}