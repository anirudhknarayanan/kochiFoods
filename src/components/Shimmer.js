import React from "react";

export default function Shimmer() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-8">
      
      {/* Top Loading Bar */}
      <div className="flex justify-between items-center mb-10">
        
        <div className="h-10 w-64 bg-gray-300 rounded-lg animate-pulse"></div>

        <div className="h-10 w-40 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>

      {/* Shimmer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-4"
            >
              
              {/* Image Skeleton */}
              <div className="w-full h-52 bg-gray-300 rounded-xl animate-pulse"></div>

              {/* Title */}
              <div className="h-6 bg-gray-300 rounded-md mt-5 w-3/4 animate-pulse"></div>

              {/* Cuisine */}
              <div className="h-4 bg-gray-300 rounded-md mt-3 w-full animate-pulse"></div>

              <div className="h-4 bg-gray-300 rounded-md mt-2 w-2/3 animate-pulse"></div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-5">
                
                <div className="h-8 w-16 bg-gray-300 rounded-lg animate-pulse"></div>

                <div className="h-5 w-24 bg-gray-300 rounded-md animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
