import "./App.css";
import FuncComp from "./funccomp";
import ClassComp from "./classcomp";

const App = () => {
  return (
    <div className="App">
      <h1> Functional Component</h1>
      <FuncComp />
      <h1> Class Component</h1>
      <ClassComp />
    </div>
  );
};

export default App;
