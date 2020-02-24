import React from 'react';
import './RenderImage.scss';

export const RenderImage = props => {
  return (
    <div className="_imageContainer">
      <img src={props.URL} alt="a dog" className="_image"></img>
    </div>
  );
};

export default RenderImage;
