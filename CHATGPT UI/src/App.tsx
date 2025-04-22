import React, { useState } from 'react';
import { Chat } from './components/Chat';
import { Header } from './components/Header';

function App() {
  const [chatKey, setChatKey] = useState<number>(0);

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header onNewChat={handleNewChat} />
      <main className="container mx-auto">
        <Chat key={chatKey} />
      </main>
    </div>
  );
}

export default App;