import Chat from '../Chat/Chat';
import './ChatSection.css';
import { ChatData } from '../Chat/chatData';
import { useState } from 'react';

export default function ChatSection() {
  const [textAdmin, setTextAdmin] = useState('');
  const [textUser, setTextUser] = useState('');
  const admin = ChatData.find((user) => user.isAdmin === true);
  const user = ChatData.find((user) => user.isAdmin === false);

  const handleChangeAdmin = (e) => {
    let message = e.target.value;
    setTextAdmin(message);
  };
  const handleChangeUser = (e) => {
    let message = e.target.value;
    setTextUser(message);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const adminMessage = e.target.id === 'admin_btn';
    let newMessage = {
      id: 3,
      name: adminMessage ? admin.name : user.name,
      status: adminMessage ? admin.status : user.status,
      avatar: adminMessage ? admin.avatar : user.avatar,
      isAdmin: adminMessage ? true : false,
      message: adminMessage ? textAdmin : textUser,
      date: 'Вчера в 19:45',
    };

    ChatData.push(newMessage);
    setTextAdmin('');
    setTextUser('');
  }

  return (
    <section className="chat__section">
      <Chat
        messages={ChatData}
        title="Чат с пользователем"
        isAdmin={false}
        onSubmit={handleSubmit}
        onChange={handleChangeUser}
        value={textUser}
        admin={admin}
        user={user}
      />
      <Chat
        messages={ChatData}
        title="Чат с администратором"
        isAdmin={true}
        onSubmit={handleSubmit}
        onChange={handleChangeAdmin}
        value={textAdmin}
        admin={admin}
        user={user}
      />
    </section>
  );
}
