import * as actions from '../actions/actions';

const testApi = ({ getState, dispatch }) => next => action => {
    // if (action.type !== actions.TEST_API_REQUEST) {
    //     console.log(action.type);
    //     console.log(actions.TEST_API_REQUEST);
    //     console.log("You're not a API action, ciao");
    //     next(action);
    // }

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