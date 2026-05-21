import React from 'react'

export default function Shimmer() {
  return (
    
      <div className="shimmer-container">

         {Array(12)
            .fill("")
            .map((_, index) => (

               <div key={index} className="shimmer-card">

                  <div className="shimmer-img"></div>

                  <div className="shimmer-line title"></div>

                  <div className="shimmer-line small"></div>

                  <div className="shimmer-line small"></div>

               </div>

            ))}

      </div>
  )
}
