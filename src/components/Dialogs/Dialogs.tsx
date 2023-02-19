import React from 'react';
import { DialogsPageType } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
type RootStateType = {
  state: DialogsPageType;
};

const Dialogs = (props: RootStateType) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef<HTMLTextAreaElement>();

  let addMessage = () => {
    let text = newMessageElement.current?.value;

    return console.log(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>+</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
