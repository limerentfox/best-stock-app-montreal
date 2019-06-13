import React from "react";
import "./App.css";
import HeaderArea from "./components/HeaderArea/HeaderArea";
import SearchBarArea from "./components/SearchBarArea/SearchBarArea";
import MainBodyTopArea from "./components/MainBodyTopArea/MainBodyTopArea";
import MainBodyBottomArea from "./components/MainBodyBottomArea/MainBodyBottomArea";
import FooterArea from "./components/FooterArea/FooterArea";

import { Provider } from "react-redux";
import store from "../store";
import protectedApiCall from "../services/protectedApiCall";

protectedApiCall("stock/aapl/cash-flow", "period=daily").then(data =>
  console.log(data)
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
