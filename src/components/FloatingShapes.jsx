import React from 'react';

export const FloatingShapes = () => {
  return (
    <>
      <div className="floating-shape w-96 h-96 bg-purple-500 top-20 -left-48" style={{ animationDelay: '0s' }}></div>
      <div className="floating-shape w-80 h-80 bg-pink-500 top-1/2 -right-40" style={{ animationDelay: '7s' }}></div>
      <div className="floating-shape w-72 h-72 bg-blue-500 bottom-20 left-1/4" style={{ animationDelay: '14s' }}></div>
    </>
  );
};
