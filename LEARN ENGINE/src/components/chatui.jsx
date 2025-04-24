import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatbotUI() {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, isBot: false }];
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: `Thanks for your message! This is a demo response to: "${inputValue}"`, isBot: true }
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-96 border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
      {/* Chat messages area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 max-w-xs p-3 rounded-lg ${
              message.isBot 
                ? "bg-blue-100 text-blue-800 mr-auto" 
                : "bg-gray-200 text-gray-800 ml-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-300 p-3 bg-white flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}


