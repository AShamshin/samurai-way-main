import React, { ChangeEvent } from 'react';
import { DialogsPageType } from '../../redux/store';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
type DialogsPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
  dialogsPage: DialogsPageType;
};

const Dialogs = (props: DialogsPropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder='Enter your message'
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
