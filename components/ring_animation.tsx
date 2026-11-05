import React from 'react';
import './ring_animation.scss';

interface RingAnimationProps {
  n?: number;
  imageUrl?: string;
}

export const RingAnimation: React.FC<RingAnimationProps> = ({ 
  n = 3, 
  imageUrl = "/eu2.jpeg" 
}) => {
  return (
    <div className="a3d">
      {/* Inelele animate */}
      {Array.from({ length: n }).map((_, i) => (
        <div 
          key={i} 
          className="ring" 
          style={{ '--k': i / n } as React.CSSProperties & { [key: string]: any }} 
        />
      ))}

      {/* Imaginea suprapusă absolut în centrul inelelor */}
      <img src={imageUrl} alt="Center Graphic" className="center-image" />
    </div>
  );
};

export default RingAnimation;