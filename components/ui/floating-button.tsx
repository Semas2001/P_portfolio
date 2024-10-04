// FloatingButton.tsx

import React from 'react';

const FloatingButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV Semas Armonaitis.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed z-30 bottom-4 left-5 inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      aria-label="Download CV"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Download CV
      </span>
    </button>
  );
};

export default FloatingButton;
