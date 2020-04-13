import React, { Component } from "react";

class App extends Component {
  render() {
    const greeting = "Good morning, ";
    const me = "Bill";

    return (
      <div>
        {greeting}
        {me}
      </div>
    );
  }
}

export default App;
