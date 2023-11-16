import Glide from '@glidejs/glide';
import { useEffect, useRef } from 'react';

const imagePaths = [
  '/images/banners/banner-01.jpg',
  '/images/banners/banner-02.jpg',
  '/images/banners/banner-03.jpg',
  '/images/banners/banner-05.jpg',
];

export default function HomeCarousel() {
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current !== null) {
      new Glide(carousel.current, {
        type: 'carousel',
        autoplay: 1000 * 5,
      }).mount();
    }
  }, [carousel]);

  return (
    <div className="content-banner">
      <div className="glide" ref={carousel}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {imagePaths.map((imagePath, index) => {
              return (
                <li key={index} className="glide__slide">
                  <picture>
                    <img src={imagePath} alt=""></img>
                  </picture>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left button button-primary"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right button button-primary"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
