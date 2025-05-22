// components/ui/avatar.js
import React from "react";

export function Avatar({ children }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }) {
  return <img className="w-10 h-10 rounded-full object-cover" src={src} alt={alt} />;
}

export function AvatarFallback({ children }) {
  return <span className="text-sm font-bold text-gray-600">{children}</span>;
}
