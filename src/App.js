import CompanyCeo from './containers/CompanyCeo'
import './App.css';
import CompanyRevenue from './containers/CompanyRevenue';

function App() {
  return (
    <div className="App">
      <div >
        <CompanyCeo/>
      </div>
      <div>
        <CompanyRevenue/>
      </div>
    </div>
  );
}

export default App;
