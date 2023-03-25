import React from 'react';
import { connect } from 'react-redux';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import { RootStateType, StoreType } from '../../redux/store';

import { ActionTypes } from '../../redux/store';
import Dialogs from './Dialogs';

let mapStateToProps = (state: RootStateType) => {
  return { dialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
