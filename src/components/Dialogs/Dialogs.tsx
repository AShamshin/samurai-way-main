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

let dialogsData = [
  { id: 1, name: 'Алик' },
  { id: 2, name: 'Серя' },
  { id: 3, name: 'Дашка' },
  { id: 4, name: 'Кудрявый' },
  { id: 5, name: 'Витёк' },
  { id: 6, name: 'Ванёк' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra ?' },
  { id: 3, message: 'How are you ?' },
];

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsData.map((d) => {
          return <DialogItem name={d.name} id={d.id} />;
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((m) => {
          return <Message message={m.message} />;
        })}
      </div>
    </div>
  );
};
export default Dialogs;
