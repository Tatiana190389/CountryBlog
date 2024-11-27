import Stars from '../../images/Рейтинг.png';
import Flag from '../../images/Icon — flag.svg';
import './Chat.css';
import Message from '../Message/Message';
import SendIcon from '../../images/Icon — Send.svg';

export default function Chat({ messages, title, isAdmin, onSubmit, onChange, value, admin, user }) {
  return (
    <div className="chat">
      <h3 className="chat__title">{title}</h3>
      <div className="chat__content">
        <div className="chat__header">
          <div className="user__avatar">
            {isAdmin ? <img src={admin.avatar} alt="admin" /> : <img src={user.avatar} alt="user" />}
          </div>
          <div className="user">
            <p className="user__name">{user.name}</p>
            <span className="user__info">
              <img className="flag" src={Flag} alt="flag" />
              {isAdmin ? admin.status : user.status}
            </span>
          </div>

          <div className="rate">{isAdmin ? null : <img src={Stars} alt="rate" />}</div>
        </div>
        <hr />
        <div className="chat__messages">
          <ul className="messages__list">
            {messages.map((mes) =>
              mes.isAdmin === false ? (
                <li className="message__item user__mes" key={mes.id}>
                  <Message src={mes.avatar} text={mes.message} date={mes.date} />
                </li>
              ) : (
                <li className="message__item admin__mes" key={mes.id}>
                  <Message src={mes.avatar} text={mes.message} date={mes.date} />
                </li>
              )
            )}
          </ul>
        </div>

        <div className="chat__footer">
          <form className="form" onSubmit={onSubmit}>
            {isAdmin ? <img src={admin.avatar} alt="admin" /> : <img src={user.avatar} alt="avatar" />}
            <input type="text" placeholder="Напишите сообщение..." value={value} onChange={onChange}></input>
            <button id={isAdmin ? 'admin_btn' : 'user_btn'} className="chat__button" type="submit" onClick={onSubmit}>
              <img src={SendIcon} alt="send" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
