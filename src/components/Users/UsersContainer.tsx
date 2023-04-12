import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import s from './UsersContainer.module.css';
import { Dispatch } from 'redux';
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
  unfollowAC,
  UserType,
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

// export type MapStatePropsType = {
//   users: Array<UserType>;
//   pageSize: number;
//   totalUsersCount: number;
//   isFetching: boolean;
//   // usersPage: InitialStateType;
// };

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setUsersTotalCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersPropsType = InitialStateType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): InitialStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },

    setUsersTotalCount: (totalCount: number) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },

    toggleIsFetching: (isFetching: boolean) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
