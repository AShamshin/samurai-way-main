import { ActionTypes } from './store';

export type UserType = {
  id: number;
  photoUrl: string;
  followed: boolean;
  name: string;
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
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
};

export type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
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
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
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

export const setCurrentPageAC = (currentPage: number) =>
  ({ type: SET_CURRENT_PAGE, currentPage } as const);

export const setUsersTotalCountAC = (totalUsersCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } as const);

export default usersReducer;
