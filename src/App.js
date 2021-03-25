import './App.css';
import React from 'react'
import DemoCounter from './components/DemoCounter';
import BookAuthor from './containers/BookAuthor';
import BookAuthorLazyLoading from './containers/BookAuthorLazyLoading';
import CompanyCeo from './containers/CompanyCeo';
import LabelLazyLaoding from './components/LabelLazyLoading';


function App() {
  return (
    <div className="App">
      <LabelLazyLaoding/>
    </div>
  );
}

export default App;
