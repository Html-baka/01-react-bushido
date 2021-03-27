import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";
import { getStatus, updateStatus } from "../../redux/profile-reducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15766;
    }
    this.props.getProfile(userId);
    //setTimeout(() => {
    this.props.getStatus(userId);
    //},1000)
  }

  render () {
    
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
  
};
let mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  
  connect(mapStateToProps, {getProfile: getProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)