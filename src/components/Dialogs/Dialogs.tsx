import React, { ChangeEvent } from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import { StoreType } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
type RootStateType = {
  // state: DialogsPageType;
  store: StoreType;
};

const Dialogs = (props: RootStateType) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  // let newMessageElement = React.createRef<HTMLTextAreaElement>();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;

    console.log(body);

    props.store.dispatch(updateNewMessageBodyCreator(body));
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
