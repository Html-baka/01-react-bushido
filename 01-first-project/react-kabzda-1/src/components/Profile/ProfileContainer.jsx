import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";
import { getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId)
    this.refreshProfile()
  }

  render () {
    return (
      <Profile {...this.props} profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus}
      isOwner={!this.props.match.params.userId}
      savePhoto={this.props.savePhoto}
      />
      
    )
  }
};
let mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  
  connect(mapStateToProps, {getProfile: getProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)