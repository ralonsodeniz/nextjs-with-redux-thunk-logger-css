import { connect } from "react-redux";
import Clock from "./clock";
import Counter from "./counter";

function Examples({ lastUpdate, light }) {
  return (
    <div className="tc shadow-5 pa2">
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
}

function mapStateToProps(state) {
  const { lastUpdate, light } = state.updateClockReducer;
  return { lastUpdate, light };
}

export default connect(mapStateToProps)(Examples);
