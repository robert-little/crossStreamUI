import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Layout from './components/layout/index';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
      </header>
    </div>
  );
}

export default App;
