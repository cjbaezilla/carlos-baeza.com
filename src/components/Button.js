import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
  // Base classes
  const baseClasses = 'font-medium rounded-lg focus:outline-none transition-colors';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes for dark theme
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
    secondary: 'bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500',
    outline: 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/30 focus:ring-2 focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-700',
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 