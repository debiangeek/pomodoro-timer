import React from 'react';
import { Provider } from 'react-redux';

import './stylesheets/App.css';
import Timer from './components/Timer';
import Footer from './components/Footer';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Timer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
