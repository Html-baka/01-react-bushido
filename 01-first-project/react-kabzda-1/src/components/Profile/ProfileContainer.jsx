import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId)
  }

  render () {
    
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
  
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile: getProfile}) (WithUrlDataContainerComponent);
