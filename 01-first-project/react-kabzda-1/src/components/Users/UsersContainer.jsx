import React from "react";
import { connect } from "react-redux";
import {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          followSuccess={this.props.follow}
          unfollowSuccess={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsers,
  follow: follow,
  unfollow: unfollow
})(UsersContainer);
