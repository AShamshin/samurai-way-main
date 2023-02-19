import { rerenderEntireTree } from '../render';

export type MessageType = {
  id: number;
  message: string | undefined;
};

export type DialogType = {
  id: number;
  name: string;
};

export type PostType = {
  id: number;
  message: string | undefined;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostType[];
};

export type DialogsPageType = {
  dialogs: DialogType[];

  messages: MessageType[];
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

let state: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you ?', likesCount: 12 },
      { id: 2, message: 'It is my first post', likesCount: 12 },
    ],
  },

  dialogsPage: {
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
  },
  sidebar: {},
};

export let addPost = (postMessage: string | undefined) => {
  let newPost = { id: 5, message: postMessage, likesCount: 0 };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
