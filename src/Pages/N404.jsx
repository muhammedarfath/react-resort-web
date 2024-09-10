import React from 'react';

function N404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you are looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-block bg-[#F9DABB] text-black py-2 px-4 rounded hover:bg-[#F9DABB]">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

export default N404;
