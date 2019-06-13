// import * as actions from '../actions/actions';

const testApi = ({ getState, dispatch }) => next => action => {

    console.log("yooo im a middleware");
    const { url } = action.payload;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });

    next(action);
}

export default testApi;