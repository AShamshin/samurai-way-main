// export type ActionTypes =
//   | ReturnType<typeof addPostActionCreator>
//   | ReturnType<typeof updateNewPostTextActionCreator>
//   | ReturnType<typeof sendMessageCreator>
//   | ReturnType<typeof updateNewMessageBodyCreator>;

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Алик' },
    { id: 2, name: 'Серя' },
    { id: 3, name: 'Дашка' },
    { id: 4, name: 'Кудрявый' },
    { id: 5, name: 'Витёк' },
    { id: 6, name: 'Ванёк' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra ?' },
    { id: 3, message: 'How are you ?' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action: any) => {
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
