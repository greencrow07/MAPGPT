import React, { useState } from 'react';
import { Message } from '../types';
import { generateId } from '../utils/helpers';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: generateId(),
        role: 'assistant',
        content: getAIResponse(content),
        timestamp: Date.now(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
      return "I'm just a simple AI clone, but I'm functioning well. How can I help you?";
    } else if (lowerCaseMessage.includes('name')) {
      return "I'm ChatClone, a simplified version of a conversational AI.";
    } else if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Is there anything else you'd like to know?";
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
      return 'Goodbye! Feel free to return if you have more questions.';
    } else {
      return "I'm a simple demo AI and can only respond with pre-defined messages. In a real application, this would connect to an actual AI service.";
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <MessageList messages={messages} isLoading={isLoading} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}