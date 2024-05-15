'use client';

import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const SwapAnimation: React.FC = () => {
  const [swapped, setSwapped] = useState(false);

  const springPropsA = useSpring({
    transform: swapped ? 'translateX(50px)' : 'translateX(0px)',
  });

  const springPropsB = useSpring({
    transform: swapped ? 'translateX(-50px)' : 'translateX(0px)',
  });

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
          width: '100px', 
          cursor: 'pointer' 
        }}
      >
        <animated.span style={{ ...springPropsA, position: 'absolute', left: 0 }}>A</animated.span>
        <animated.span style={{ ...springPropsB, position: 'absolute', left: '50px' }}>B</animated.span>
      </h1>
    </div>
  );
};

export default SwapAnimation;
