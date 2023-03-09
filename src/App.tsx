import React, { useState } from "react";

import EmotionSelect from "./components/EmotionSelect";

import "./App.css";

function App() {
  const [emotion, setEmotion] = useState<string>("")

  return (
    <div className="container">
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
      <p>Familiar Faces</p>
      <EmotionSelect getter={emotion} setter={setEmotion} />
    </div>
  );
}

export default App;
