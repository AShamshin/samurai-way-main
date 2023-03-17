import React from 'react';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import { StoreType } from '../../redux/store';

import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
  store: StoreType;
};

const DialogsContainer = (props: DialogsContainerPropsType) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
