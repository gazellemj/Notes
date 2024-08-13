// src/App.js
import React from "react";
import Notes from "../components/InitialNotes";

function App() {
  return (
    <div className="notes relative flex">
      <div className="main-container">
        <Notes />
      </div>
    </div>
  );
}

export default App;
