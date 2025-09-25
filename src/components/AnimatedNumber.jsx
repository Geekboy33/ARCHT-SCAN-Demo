import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ 
  value, 
  duration = 1000, 
  decimals = 0, 
  prefix = '', 
  suffix = '', 
  className = '',
  glow = false,
  scale = false,
  format = 'number'
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    const startAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      startValueRef.current = displayValue;
      startTimeRef.current = performance.now();
      setIsAnimating(true);

      const animate = (currentTime) => {
        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = startValueRef.current + (value - startValueRef.current) * easeOutCubic;
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);

  const formatNumber = (num) => {
    if (format === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(num);
    } else if (format === 'percentage') {
      return `${(num * 100).toFixed(decimals)}%`;
    } else if (format === 'compact') {
      return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: decimals
      }).format(num);
    } else {
      return num.toFixed(decimals);
    }
  };

  const baseClasses = `number-counter transition-all duration-300 ${className}`;
  const effectClasses = glow ? 'text-glow-white' : '';
  const scaleClasses = scale ? 'hover:scale-105 transition-transform duration-300' : '';
  
  return (
    <span className={`${baseClasses} ${effectClasses} ${scaleClasses} font-mono`}>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  );
};

export default AnimatedNumber;


