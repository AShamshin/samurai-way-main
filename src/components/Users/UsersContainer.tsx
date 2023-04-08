import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  unfollowAC,
  UserType,
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component<any> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  // usersPage: InitialStateType;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setUsersTotalCount: (totalCount: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
