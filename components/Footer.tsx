import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 mb-2">
          &copy; {new Date().getFullYear()} J Sasi Kiran. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm">
          Designed with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;