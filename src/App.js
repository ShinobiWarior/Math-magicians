import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
    };
  }

  render() {
    const { startValue: start } = this.state;
    return (
      <div className="App">
        <Calculator start={start} />
      </div>
    );
  }
}

export default App;
