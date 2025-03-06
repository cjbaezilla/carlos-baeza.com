import React from 'react';

const Card = ({ children, title, footer, className = '' }) => {
  return (
    <div className={`bg-dark-card border border-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {title && (
        <div className="border-b border-gray-800 px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        </div>
      )}
      
      <div className="p-4">
        {children}
      </div>
      
      {footer && (
        <div className="border-t border-gray-800 px-4 py-3 bg-dark-primary/30">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 