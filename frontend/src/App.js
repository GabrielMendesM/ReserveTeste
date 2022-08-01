import React from 'react';

import './App.css';
import MainHeader from './Shared/MainHeader';

const Countries = React.lazy(() => import('./Countries/Pages/Countries'));

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Countries />
    </div>
  );
}

export default App;
