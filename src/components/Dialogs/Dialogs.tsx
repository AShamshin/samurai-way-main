import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

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
