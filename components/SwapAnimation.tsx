'use client';

import React, { useState, useEffect } from 'react';
import { useSprings, animated, config } from '@react-spring/web';

interface SwapAnimationProps {
  str: string;
  swapOrder: number[];
}

const generateRandomPermutation = (arr: number[]) => {
  let result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const SwapAnimation: React.FC<SwapAnimationProps> = ({ str, swapOrder }) => {
  const [swapped, setSwapped] = useState(false);
  const [randomOrder, setRandomOrder] = useState<number[]>([]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRandomOrder(generateRandomPermutation(swapOrder));
      setStage(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [swapOrder]);

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => {
        setStage(2);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [stage]);

  const letterWidth = 23;
  const springs = useSprings(
    str.length,
    str.split('').map((_, index) => {
      let targetIndex;
      if (stage === 1) {
        targetIndex = randomOrder[index];
      } else if (stage === 2) {
        targetIndex = swapOrder[index];
      } else {
        targetIndex = index;
      }
      return {
        transform: `translateX(${(targetIndex - index) * letterWidth}px)`,
        config: { duration: 500 },
        delay: index * 100,
      };
    })
  );

  return (
    <div style={{ textAlign: 'left' }}>
      <h1 
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
