import React from "react";

export default function LunarRecyclingSystem() {
  const components = [
    { label: "🏠 Crew Habitat", x: 1, y: 1, color: "bg-blue-200" },
    { label: "💧 Urine Processor", x: 3, y: 1, color: "bg-blue-300" },
    { label: "♻️ Water Recovery", x: 5, y: 1, color: "bg-blue-400" },
    { label: "💩 Bioreactor", x: 3, y: 3, color: "bg-orange-200" },
    { label: "🛢 Methane Storage", x: 1, y: 3, color: "bg-yellow-300" },
    { label: "🌿 Compost Chamber", x: 3, y: 5, color: "bg-green-300" },
    { label: "🪴 Fertilizer Storage", x: 1, y: 5, color: "bg-green-400" },
    { label: "🗑 Organic Waste Bin", x: 7, y: 1, color: "bg-pink-300" },
    { label: "🪱 Vermicomposter", x: 7, y: 3, color: "bg-purple-300" },
    { label: "🌱 Plant Chamber", x: 7, y: 5, color: "bg-green-200" },
    { label: "🧫 O2/CO2 Algae", x: 5, y: 3, color: "bg-cyan-300" }
  ];

  return (
    <div className="relative w-full h-[700px] bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">
        Lunar Waste-to-Resource Recycling System
      </h2>

      <div className="absolute top-0 left-0 w-full h-full">
        {/* Component Boxes */}
        {components.map((comp, idx) => (
          <div
            key={idx}
            className={`absolute w-44 h-16 ${comp.color} text-center flex items-center justify-center rounded-xl shadow-lg text-sm font-medium`}
            style={{ left: `${comp.x * 100}px`, top: `${comp.y * 100}px` }}
          >
            {comp.label}
          </div>
        ))}

        {/* Arrows via SVG */}
        <svg className="absolute w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
            </marker>
          </defs>

          {/* Example arrows between boxes */}
          <line x1="200" y1="150" x2="300" y2="150" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="400" y1="150" x2="500" y2="150" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="300" y1="150" x2="300" y2="250" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="300" y1="300" x2="200" y2="300" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="200" y1="100" x2="200" y2="300" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="700" y1="100" x2="700" y2="300" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="700" y1="300" x2="700" y2="500" stroke="black" strokeWidth="2" markerEnd="url(#arrow)" />
        </svg>
      </div>
    </div>
  );
          }
