import React, { useState } from 'react';
import './App.css';
import Tree from './components/Tree';

// generate labels from A - 2
const getLabels = () => {
  let labels = [];
  for (var gift = 100; gift < 2000; gift += 100) {
    labels.push(`$${gift}`)
  }
  return labels;
};

function App() {
  const onSelected = (label: string) => {
    console.log(`Gift of ${label} was selected`);
  };

  const [labels] = useState(getLabels());
  return (
    <div className="App">
      <Tree
        labels={labels}
        onSelected={onSelected}
        />
    </div>
  );
}

export default App;
