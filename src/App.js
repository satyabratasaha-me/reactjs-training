import CompanyCeo from './components/CompanyCeo/CompanyCeo'
import './App.css';
import CompanyRevenue from './components/CompanyRevenue/CompanyRevenue';

function App() {
  return (
    <div className="App">
      <div>
        <p>Company CEO</p>
        <CompanyCeo/>
      </div>
      <div>
        <p>Company Revenue</p>
        <CompanyRevenue/>
      </div>
    </div>
  );
}

export default App;
