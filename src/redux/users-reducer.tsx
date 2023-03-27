import { ActionTypes } from './store';

export type UserType = {
  id: number;
  photoUrl: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: UsersLocation;
};
export type UsersLocation = {
  city: string;
  country: string;
};

const FOLLOW = 'FOLLOW ';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState: InitialStateType = {
  users: [],
};

export type InitialStateType = {
  users: Array<UserType>;
};

const usersReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.userId ? { ...el, followed: true } : el
        ),
      };
    }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.userId ? { ...el, followed: false } : el
        ),
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);

export const unfollowAC = (userId: number) =>
  ({ type: UNFOLLOW, userId } as const);

export const setUsersAC = (users: Array<UserType>) =>
  ({ type: SET_USERS, users } as const);

export default usersReducer;
