"use client";

import { useState } from "react";

export function Flashlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full aspect-video bg-yellow-100 rounded-xl shadow-lg overflow-hidden border-4 border-dashed border-yellow-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 p-4 text-center pointer-events-none">
        <p className="text-xl font-semibold text-yellow-900">
          Don’t worry, the drama is buffering… 🍿
        </p>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition animate-pulse">
            Watch Teaser
          </button>
        </div>
      </div>

      {/* Flashlight effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 80px, black 140px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 80px, black 140px)`,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />
    </div>
  );
}
