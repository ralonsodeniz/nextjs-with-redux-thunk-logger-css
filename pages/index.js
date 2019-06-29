import React from "react";
import { connect } from "react-redux";
import {
  startClock,
  serverRenderClock,
  getUsers
} from "../redux-store/actions";
import Examples from "../components/examples";
import UserList from "../components/userList";
import "tachyons";

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    // we need the getInitialProps to be async so we can set it to await the fetch before server rendering with the preloaded state
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    await reduxStore.dispatch(
      getUsers("https://jsonplaceholder.typicode.com/users")
    );
    reduxStore.dispatch(serverRenderClock(isServer));
    return {};
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => this.props.onStartClock(), 1000); // with shorthand we use startClock()
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <Examples />
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.updateUsersReducer.users,
    count: state.updateCounterReducer.count
  };
};

const mapDispatchToProps = dispatch => {
  // const mapDispatchToProps = { startClock }; this is the same but shorthanded
  return {
    onStartClock: () => dispatch(startClock())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
