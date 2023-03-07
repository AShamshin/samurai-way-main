// export type ActionTypes =
//   | ReturnType<typeof addPostActionCreator>
//   | ReturnType<typeof updateNewPostTextActionCreator>
//   | ReturnType<typeof sendMessageCreator>
//   | ReturnType<typeof updateNewMessageBodyCreator>;

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE } as const);

export const updateNewMessageBodyCreator = (body: string) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const);

export default dialogsReducer;
