import React from "react";
import ImageCard from "../Components/ImageCard";
import UseImages from "../hooks/useImages";

const CreativeMakeup = () => {
  const { creative_makeup } = UseImages();
  return (
    <div>
      {creative_makeup.map((images) => {
        return <ImageCard images={images.img} />;
      })}
    </div>
  );
};

export default CreativeMakeup;
