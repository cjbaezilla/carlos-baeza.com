import React from 'react';

const SecondaryNavbar = () => {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center md:justify-end items-center">
          <a 
            href="https://erc4626.carlos-baeza.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-blue-300 transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>ERC4626 Book Course</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar; 