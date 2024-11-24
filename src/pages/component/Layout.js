import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
     
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">First Project</h1>
      </header>
      <main className="flex-1 p-6">
        {children} 
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
