import React from "react";
import "./App.css";
// import HeaderArea from "./components/HeaderArea/HeaderArea";
import SearchBarArea from "./components/SearchBarArea/SearchBarArea";
// import MainBodyTopArea from "./components/MainBodyTopArea/MainBodyTopArea";
// import MainBodyBottomArea from "./components/MainBodyBottomArea/MainBodyBottomArea";
// import FooterArea from "./components/FooterArea/FooterArea";

import { Provider } from "react-redux";
import store from "../services/store/store";
import {
  fetchNews,
  fetchStats,
  fetchPeers,
  fetchOverview
} from "../services/protected/protectedFetches";
import { fetchBook } from "../services/basic/basicFetches";

/**
 * Construct insuring the resolution of all the promises.
 * Once all the promises are resolved, they can be accessed in order.
 */
Promise.all([
  fetchBook("aapl"),
  fetchNews("aapl"),
  fetchStats("aapl"),
  fetchPeers("aapl"),
  fetchOverview("aapl")
]).then(d =>
  d.forEach(a => {
    console.log(a);
  })
);

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
