import React from 'react';

interface ImageCardProps {
  src: string;
  legenda: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, legenda }) => {
  return (
    <div style={{ margin: '10px', display: 'inline-block' }}>
      <img src={src} alt={legenda} style={{ width: '300px', height: '200px' }} />
      <p>{legenda}</p>
    </div>
  );
};

export default ImageCard;