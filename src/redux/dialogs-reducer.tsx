import { ActionTypes } from './store';

export type MessageType = {
  id: number;
  message: string;
};
export type DialogType = {
  id: number;
  name: string;
};

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
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra ?' },
    { id: 3, message: 'How are you ?' },
  ] as Array<MessageType>,
  newMessageBody: '',
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: '',

        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE } as const);

export const updateNewMessageBodyCreator = (body: string) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const);

export default dialogsReducer;
