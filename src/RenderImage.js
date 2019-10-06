import React from 'react';
import './RenderImage.css';

export const RenderImage = (props) =>{
    return(
        <div className='_imageContainer'>
            <img src={props.URL} className='_image'>
            </img>
        </div>
    );
}

export default RenderImage;

