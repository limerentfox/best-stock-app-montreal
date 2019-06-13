import React from "react";
import "./App.css";
import SearchBarArea from "./SearchBarArea";
import { Provider } from "react-redux";
import store from "./store";
import protectedApiCall from "./services/protectedApiCall";
import "./css/App.css";

protectedApiCall("stock/aapl/cash-flow", "period=daily").then(data =>
  console.log(data)
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBarArea />
      </div>
    </Provider>
  );
}

export default App;
