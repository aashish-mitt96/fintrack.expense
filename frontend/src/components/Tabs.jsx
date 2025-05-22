// components/ui/tabs.js
import React from "react";

export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex space-x-2 border-b pb-2 mb-4">{children}</div>;
}

export function TabsTrigger({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-t font-medium ${
        isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}
