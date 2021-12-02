import "./App.css";
// import TCFunc from "./component/TodoContainerFunc";
// import TCClass from "./component/TodoContainerClass";
import NewComponentCl from "./component/NewComponentCl";
import HookExample from "./component/HookExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world from React</h1>
        <NewComponentCl />
        <HookExample />
      </header>
    </div>
  );
}

export default App;
