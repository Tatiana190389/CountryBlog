import './Message.css';

export default function Message({ src, text, date }) {
  return (
    <div className="message">
      <div className="user__avatar">
        <img src={src} alt="avatar" />
      </div>
      <div className="message__content">
        <p className="message__text">{text}</p>
        <span className="message__date">{date}</span>
      </div>
    </div>
  );
}
