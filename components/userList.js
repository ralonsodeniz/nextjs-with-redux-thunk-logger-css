import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { users: state.updateUsersReducer.users };
};

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="pa2">
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(UserList);
