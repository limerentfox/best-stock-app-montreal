import React from 'react';
import './App.css';
import SearchBarArea from './SearchBarArea';
import { Provider } from 'react-redux';
import store from './store';
import './css/App.css'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <SearchBarArea/>
    </div>
    </Provider>
  );
}

export default App;
