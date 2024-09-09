import "./App.css";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Counter from "./components/Counter/Counter";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
      <h1>Welcome to unit testing ReactJS app!!!</h1>
      <p>This is a SAMPLE app to learn unit testing in ReactJS</p>

      <h2>Testing Props</h2>
      <CompanyInfo
        companyName="Ford"
        foundedYear="1900"
        employeesCount="1000000"
      />

      <h2>Testing States and Events</h2>
      <Counter />

      <h2>Testing API Calls</h2>
      <Posts />
    </div>
  );
}

export default App;
