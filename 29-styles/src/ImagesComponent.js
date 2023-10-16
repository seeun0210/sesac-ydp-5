import React from 'react';
import styles from './styles/SassImagesComponent.scss';
export default function () {
  return (
    <div className="imageContainer">
      <img src={process.env.PUBLIC_URL + '/images/1.png'} className="image" />
      <img src={process.env.PUBLIC_URL + '/images/2.png'} className="image" />
      <img src={process.env.PUBLIC_URL + '/images/3.png'} className="image" />
      <img src={process.env.PUBLIC_URL + '/images/4.png'} className="image" />
      <img src={process.env.PUBLIC_URL + '/images/5.png'} className="image" />
    </div>
  );
}
