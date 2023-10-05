import React, { useState } from 'react';
import './SlideChow.css'; // Import your CSS file

function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      imageUrl: '/src/assets/iphoneOne.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
    {
      imageUrl: '/src/assets/IphoneTwo.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
    {
      imageUrl: '/src/assets/IphoneThree.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
    {
      imageUrl: '/src/assets/IphoneFour.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
    {
      imageUrl: '/src/assets/IphoneFive.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
    {
      imageUrl: '/src/assets/iphonSix.jpg',
      name: 'LUNDEV',
      description: 'Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu',
    },
  ];
  const handleNextClick = () => {
    console.log('Current Index Before Next Click:', currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    console.log('Current Index After Next Click:', currentIndex);
  };
  
  const handlePrevClick = () => {
    console.log('Current Index Before Prev Click:', currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    console.log('Current Index After Prev Click:', currentIndex);
  };

  return (
    <div className="container">
      <div id="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
