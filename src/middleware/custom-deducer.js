const DEDUCER = extraArgument => ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState, extraArgument);
  }

  return next(action);
};

const INITIALIZED_DEDUCER = DEDUCER();

export default INITIALIZED_DEDUCER;
