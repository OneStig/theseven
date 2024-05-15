'use client';

import React, { useState, useEffect } from 'react';
import { useSprings, animated, config } from '@react-spring/web';

interface SwapAnimationProps {
  str: string;
  swapOrder: number[];
}

const SwapAnimation: React.FC<SwapAnimationProps> = ({ str, swapOrder }) => {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSwapped(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const letterWidth = 23;
  const springs = useSprings(
    str.length,
    str.split('').map((_, index) => ({
      transform: swapped ? `translateX(${(swapOrder[index] - index) * letterWidth}px)` : 'translateX(0px)',
      config: { duration: 500 },
      delay: index * 100,
    }))
  );

  const toggleSwap = () => {
    setSwapped(!swapped);
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h1 
        onClick={toggleSwap} 
        style={{ 
          position: 'relative', 
          display: 'inline-block', 
          width: `${str.length * letterWidth}px`, 
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }}
      >
        {springs.map((spring, index) => (
          <animated.span 
            key={index} 
            style={{ 
              ...spring, 
              position: 'absolute', 
              width: `${letterWidth}px`,
              textAlign: 'center',
              left: `${index * letterWidth}px`
            }}
          >
            {str[index]}
          </animated.span>
        ))}
      </h1>
    </div>
  );
};

export default SwapAnimation;
