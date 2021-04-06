import './GamingArea.scss';

import React, { useEffect, useState } from 'react';

import Gallery from 'react-grid-gallery';

const mainPath = 'http://randomramblingpress.se/images/gaming';
const gameCat = '/murderball';

export default function GamingArea() {
  const [theGameImages, SetTheGameImages] = useState([]);
  const [primeSectorImages, setPrimeSectorImages] = useState([]);
  const [nowanImages, setNowanImages] = useState([]);
  useEffect(() => {
    let imageList = [];
    for (let index = 1; index <= 15; index++) {
      imageList.push({
        src: mainPath + gameCat + '/thegame/' + index + '.jpg',
        thumbnail: mainPath + gameCat + '/thegame/' + index + '.jpg'
      });
    }
    SetTheGameImages(imageList);
    imageList = [];
    for (let index = 1; index <= 16; index++) {
      imageList.push({
        src: mainPath + gameCat + '/primesector/' + index + '.jpg',
        thumbnail: mainPath + gameCat + '/primesector/' + index + '.jpg'
      });
    }
    setPrimeSectorImages(imageList);
    imageList = [];
    for (let index = 1; index <= 16; index++) {
      imageList.push({
        src: mainPath + gameCat + '/nowan/' + index + '.jpg',
        thumbnail: mainPath + gameCat + '/nowan/' + index + '.jpg'
      });
    }
    setNowanImages(imageList);
  }, []);
  return (
    <div className="gamingArea">
      <div className="imageSection">
        <div>
          <h1 className="title">The Game</h1>
        </div>
        <div>
          <Gallery images={theGameImages} />
        </div>
      </div>
      <div className="imageSection">
        <div>
          <h1 className="title">The Primesector</h1>
        </div>
        <div>
          <Gallery images={primeSectorImages} />
        </div>
      </div>
      <div className="imageSection">
        <div>
          <h1 className="title">Nowan</h1>
        </div>
        <div>
          <Gallery images={nowanImages} />
        </div>
      </div>
    </div>
  );
}
