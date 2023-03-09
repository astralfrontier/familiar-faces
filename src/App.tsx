import React, { useState } from "react";

import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="container">
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
      <p>Familiar Faces</p>
      <button className="button is-primary">Button</button>
    </div>
  );
}

export default App;
