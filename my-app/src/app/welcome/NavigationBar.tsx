// import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-2 flex-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <Avatar /> */}
          <span className="text-white text-xl font-semibold ml-2">My Website</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
