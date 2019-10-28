import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/form/Routes';
function App() {
  return (
    <Provider store={store}>
      <div className='App container'>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
