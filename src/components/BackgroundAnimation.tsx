import React, { useEffect, useRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface AnimatedShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: 'bean' | 'circle' | 'swirl';
  opacity: number;
  speed: number;
}

const SHAPE_COUNT = 15;

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<AnimatedShape[]>([]);
  const scrollPosition = useScrollPosition();
  const frameRef = useRef<number>(0);

  // Initialize shapes
  useEffect(() => {
    const shapes: AnimatedShape[] = [];
    
    for (let i = 0; i < SHAPE_COUNT; i++) {
      shapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
        type: ['bean', 'circle', 'swirl'][Math.floor(Math.random() * 3)] as 'bean' | 'circle' | 'swirl',
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.8
      });
    }
    
    shapesRef.current = shapes;
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      shapesRef.current = shapesRef.current.map(shape => {
        // Update position based on scroll
        const yOffset = scrollPosition * shape.speed * 0.05;
        
        return {
          ...shape,
          y: (shape.y + yOffset) % 100,
          rotation: (shape.rotation + 0.1 * shape.speed) % 360
        };
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(frameRef.current);
  }, [scrollPosition]);

  const renderShape = (shape: AnimatedShape) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `rotate(${shape.rotation}deg)`,
      transition: 'transform 0.5s ease-out',
    };

    switch (shape.type) {
      case 'bean':
        return (
          <div 
            key={shape.id}
            style={{
              ...baseStyle,
              backgroundColor: '#4B2E05',
              borderRadius: '50% 10% 50% 10%',
            }}
          />
        );
      case 'circle':
        return (
          <div 
            key={shape.id}
            style={{
              ...baseStyle,
              backgroundColor: '#8B5E3C',
              borderRadius: '50%',
            }}
          />
        );
      case 'swirl':
        return (
          <div 
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%',
              border: '2px solid #8B5E3C',
              borderTopColor: 'transparent',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {shapesRef.current.map(renderShape)}
    </div>
  );
};