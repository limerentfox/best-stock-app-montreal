import * as actions from "../const/actions";

export const setGraphPoints = graphPoints => {
  return {
    type: actions.SET_GRAPH_POINTS,
    payload: graphPoints
  };
};
