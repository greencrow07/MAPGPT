import { MessageSquare } from 'lucide-react';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onNewChat: () => void;
}

export function Header({ onNewChat }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="text-blue-500" size={24} />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">ChatClone</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onNewChat}
            className="px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            New Chat
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}