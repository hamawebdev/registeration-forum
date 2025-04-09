
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-r-2 border-void-black"></div>
      <span className="ml-2 font-agency tracking-wider">PROCESSING...</span>
    </div>
  );
};

export default LoadingSpinner;
