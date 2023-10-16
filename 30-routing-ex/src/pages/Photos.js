import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function fetchPhotos() {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
        {
          params: {
            _limit: 10,
          },
        }
      );
      setPhotos(res.data);
    }
    fetchPhotos();
  }, []);
  console.log(photos);
  return (
    <div>
      <h1>Photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <br />
          <li>사진 제목: {photo.title}</li>
          <img
            src={photo.url}
            alt={photo.alt}
            style={{ width: '200px', height: '200px' }}
          ></img>
        </div>
      ))}
    </div>
  );
}
