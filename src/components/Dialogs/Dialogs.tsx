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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name='Алик' id={1} />
        <DialogItem name='Серя' id={2} />
        <DialogItem name='Дашка' id={3} />
        <DialogItem name='Кудрявый' id={4} />
        <DialogItem name='Витёк' id={5} />
        <DialogItem name='Ванёк' id={6} />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='How is your it-kamasutra ?' />
        <Message message='How are you ?' />
      </div>
    </div>
  );
};
export default Dialogs;
