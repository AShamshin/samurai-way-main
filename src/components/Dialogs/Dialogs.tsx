import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemType = {
  name: string;
  id: number;
};

type MessagesType = {
  message: string;
};

const DialogItem = (props: DialogItemType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: MessagesType) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Алик' },
    { id: 2, name: 'Серя' },
    { id: 3, name: 'Дашка' },
    { id: 4, name: 'Кудрявый' },
    { id: 5, name: 'Витёк' },
    { id: 6, name: 'Ванёк' },
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra ?' },
    { id: 3, message: 'How are you ?' },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
