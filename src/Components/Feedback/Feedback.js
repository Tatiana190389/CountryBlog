import { useState } from 'react';
import Like from '../../images/like.svg';
import './Feedback.css';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

export default function Feedback({ name, avatar, text, photoGallery }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="feedback__block">
      <div className="block__header">
        <img className="user__avatar" src={avatar} alt="avatar" />
        <p className="user__name">{name}</p>
      </div>

      <h5>
        <span className="city__name">БАРСЕЛОНА</span>— О городе:
      </h5>
      <div className="user__feedback">
        <p className="feedback__text">{text}</p>
      </div>

      <ul className="user__photoGallery">
        {photoGallery.slice(0, 4).map((photo) => (
          <li className="gallery__item" key={photo.id} onClick={() => setOpen(true)}>
            <img src={photo.src} alt={photo.id} />
          </li>
        ))}
        {open && <PhotoGallery images={photoGallery} open={open} closeModal={() => setOpen(false)} />}
        <li className="count__photo">+{photoGallery.length - 4}</li>
      </ul>

      <div className="block__footer">
        <p className="date">Около 1 года назад</p>
        <p className="comments">9 комментариев</p>

        <div className="like">
          <button className="like__button">
            <img className="like__icon" src={Like} alt="like" />
          </button>
          <p className="like__count">9</p>
        </div>
      </div>
    </div>
  );
}
