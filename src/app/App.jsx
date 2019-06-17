import React from 'react';
import './App.css';
// import HeaderArea from "./components/HeaderArea/HeaderArea";
import SearchBarArea from './components/SearchBarArea/SearchBarArea';
// import MainBodyTopArea from "./components/MainBodyTopArea/MainBodyTopArea";
// import MainBodyBottomArea from "./components/MainBodyBottomArea/MainBodyBottomArea";
// import FooterArea from "./components/FooterArea/FooterArea";

import { Provider } from 'react-redux';
import store from '../store/store';

/**
 * Construct insuring the resolution of all the promises.
 * Once all the promises are resolved, they can be accessed in order.
 */

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HeaderArea /> */}
        <SearchBarArea />
        {/* <MainBodyTopArea />
        <MainBodyBottomArea />
        <FooterArea /> */}
      </div>
    </Provider>
  );
}

export default App;
