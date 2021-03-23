import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import ViewAllBooks from './containers/ViewAllBooks';
import ViewAllAuthors from './containers/ViewAllAuthors';

function App() {
  return (
    <div className="App">
      <ViewAllBooks/>
      <ViewAllAuthors/>
    </div>
  );
}

export default App;
