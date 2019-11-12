import React from 'react';
import Crud from './components/Crud.jsx';
import ContProvider from './components/ContProvider.js';
//import Context from './contexts/context.js';
import './App.css';

function App() {
  return (
    <ContProvider>
      <Crud />
    </ContProvider>
  );
}

export default App;
