import * as actions from "../const/actions";

const DEFAULT_STATE = {
  graphPoints: []
};

const setGraphPoints = (state, action) => {
  return { ...state, graphPoints: action.payload };
};

const GraphReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.SET_GRAPH_POINTS:
      return setGraphPoints(state, action);
    default:
      return state;
  }
};

export default GraphReducer;
