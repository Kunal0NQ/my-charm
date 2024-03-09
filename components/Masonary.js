// src/components/Masonry.js
"use client"
import React, { useEffect } from 'react';

const Masonry = ({ children }) => {
  useEffect(() => {
    // const container = document.querySelector('.masonry-container');
    // const items = document.querySelectorAll('.masonry-item');

    // const columnHeights = Array.from({ length: container.children.length }, () => 0);

    // items.forEach(item => {
    //   const minIndex = columnHeights.indexOf(Math.min(...columnHeights));
    //   item.style.gridRowStart = columnHeights[minIndex] + 1;
    //   columnHeights[minIndex] += item.clientHeight;
    // });
  }, []);

  return (
  
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
};

export default Masonry;
  // <div className="masonry-container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    //   {children}
    // </div>