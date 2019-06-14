import React from "react";
import { connect } from "react-redux";
import { setGraphPoints } from "../../../actions/graphActionCreators";

const Graph = props => {
  return <div className="graph-area">{props.graphItem}</div>;
};

const mapStateToProps = state => ({});

export default Graph;
