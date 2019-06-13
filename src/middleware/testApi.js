// import * as actions from '../actions/actions';
import protectedApiCall from '../services/protectedApiCall';

const testApi = ({ getState, dispatch }) => next => action => {

    console.log("yooo im a middleware");
    const { url } = action.payload;

    protectedApiCall(url)

    // fetch(url)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    next(action);
}

export default testApi;