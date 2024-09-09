import "./App.css";
import UndoableCounter from "./components/UndoableCounter";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12  d-flex justify-content-center mb-5">
          <h1>Undoable Counter</h1>
        </div>
        <div className="col-12">
          <UndoableCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
