import React from 'react';
import UseImages from '../hooks/useImages';
import ImageCard from '../Components/ImageCard';

const CommercialShoots = () => {
  const { commercial_shoots } = UseImages();
  return (
    <div>
      {commercial_shoots.map((images) => {
        return <ImageCard images={images.img} />;
      })}
    </div>
  );
}

export default CommercialShoots;
