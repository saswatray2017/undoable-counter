import React, { useState } from "react";

const UndoableCounter = () => {
  const [counter, setCounter] = useState(0);
  const [historyAction, setHistoryAction] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);

  const handleCounterBtnClick = (num) => {
    setCounter((prevCounter) => prevCounter + num);
    if (historyAction.length < 50) {
      setHistoryAction((prevHis) => [
        {
          action: num,
          prev: counter,
          curr: counter + num,
        },
        ...prevHis,
      ]);
    }
  };

  const handleUndo = () => {
    const undoObj = historyAction[0];
    setHistoryAction((prevHistory) => prevHistory.slice(1));
    setRedoHistory([undoObj, ...redoHistory]);
    setCounter(undoObj.prev);
  };

  const handleRedo = () => {
    const redoObj = redoHistory[0];
    setCounter(redoObj.curr);
    setHistoryAction((prevHis) => [redoObj, ...prevHis]);
    setRedoHistory((prevHistory) => prevHistory.slice(1));
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-5 text-end">
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(-100)}
            >
              -100
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(-10)}
            >
              -10
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(-1)}
            >
              -1
            </button>
          </div>
          <div className="col-2">
            <p className="fs-4 text-center">{counter}</p>
          </div>
          <div className="col-5">
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(1)}
            >
              1
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(10)}
            >
              10
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => handleCounterBtnClick(100)}
            >
              100
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary btn-lg mx-2"
              disabled={!historyAction.length}
              onClick={handleUndo}
            >
              Undo
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg mx-2"
              disabled={!redoHistory.length}
              onClick={handleRedo}
            >
              Redo
            </button>
          </div>
        </div>
      </div>
      {historyAction.length > 0 && (
        <div className="col-12 d-flex justify-content-center mt-3">
          <div className="history-box">
            {historyAction.map((val, i) => (
              <p className="text-center mt-1" key={i}>
                <span className="px-1">
                  {val.action > 0 && "+"}
                  {val.action}
                </span>
                <span>&#40;</span>
                <span className="px-1">
                  {val.prev}
                  <span className="px-1">-&gt;</span>
                  {val.curr}
                </span>
                <span>&#41;</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UndoableCounter;
