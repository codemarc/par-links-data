import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Panels from './Panels';

const App = () => (
  <>
  <Header />
  <Panels />
  </>
)
ReactDOM.render(<App />, document.getElementById('root'));
