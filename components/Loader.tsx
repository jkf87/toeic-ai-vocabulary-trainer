
import React from 'react';

const Loader: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-lg shadow-inner">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-lg font-semibold text-slate-700">{message}</p>
      <p className="text-sm text-slate-500">AI가 열심히 문제를 만들고 있어요...</p>
    </div>
  );
};

export default Loader;
