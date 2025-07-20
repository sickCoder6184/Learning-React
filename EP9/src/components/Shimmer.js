import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 col-span-full">
      {Array(8)
        .fill("")
        .map((_, idx) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-full" key={idx}>
            <div className="w-full h-48 bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
              </div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;