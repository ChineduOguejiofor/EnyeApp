import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './components/form/Routes';
// import Testcomp from './components/form/Testcomp';

const store = configureStore();
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
