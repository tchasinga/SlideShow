import React from 'react';
import './SlideChow.css';
import iphoneOne from '../assets/iphoneOne.jpg';
import IphoneTwo from '../assets/IphoneTwo.jpg';
import IphoneThree from '../assets/IphoneThree.jpg';
import IphoneFour from '../assets/IphoneFour.jpg';
import IphoneFive from '../assets/IphoneFive.jpg';
import iphonSix from '../assets/iphonSix.jpg';

class SlideChow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          image: iphoneOne,
          name: 'Iphone 12 Pro Max',
          description: 'iPhone Pro Max 128GB 5G (VN/A) - Hàng Chính Hãng',
        },
        {
          id: 2,
          image: IphoneTwo,
          name: 'Iphone 13 mini',
          description: 'iPhone 13 mini 128GB 5G (VN/A) - Hàng Chính Hãng',
        },
        {
          id: 3,
          image: IphoneThree,
          name: 'Iphone X',
          description: ' iPhone X (VN/A) - Hàng Chính H',
        },
        {
          id: 4,
          image: IphoneFour,
          name: 'Iphone Xs',
          description: ' iPhone Xs 123GB 5G (VN/A) - Hàng Ch',
        },
        {
          id: 5,
          image: IphoneFive,
          name: 'Iphone 11',
          description: ' iPhone 11 331GB - Hàng Ch',
        },
        {
          id: 6,
          image: iphonSix,
          name: 'Iphone 12 min',
          description: 'Good price for iPhone 222GB 5G in BagetPhone',
        },
      ],
      currentIndex: 0,
    };
  }

  handleNext = () => {
    const { items, currentIndex } = this.state;
    const newItems = [...items];
    const firstItem = newItems.shift();
    newItems.push(firstItem);
    this.setState({
      items: newItems,
      currentIndex: currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    });
  };

  handlePrev = () => {
    const { items, currentIndex } = this.state;
    const newItems = [...items];
    const lastItem = newItems.pop();
    newItems.unshift(lastItem);
    this.setState({
      items: newItems,
      currentIndex: currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    });
  };

  render() {
    const { items, currentIndex } = this.state;
    return (
      <div className="container">
        <div id="slide">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`item ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
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
          <button id="prev" onClick={this.handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={this.handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SlideChow;