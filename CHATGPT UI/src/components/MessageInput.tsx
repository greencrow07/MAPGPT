import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  isLoading: boolean;
}

export function MessageInput({ onSendMessage, isLoading }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          placeholder="Type a message..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={`ml-2 p-3 rounded-lg ${
            !message.trim() || isLoading
              ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 transition-colors'
          } text-white`}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}