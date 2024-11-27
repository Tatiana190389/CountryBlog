import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoGallery.css';

export default function PhotoGallery({ images, closeModal }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img className="gallery__item" src={image.src} alt={image.id} />
          </div>
        ))}
      </Slider>
      <button className="button__gallery" onClick={closeModal}>
        X
      </button>
    </div>
  );
}
