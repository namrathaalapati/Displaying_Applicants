import React, { Component } from "react";
import {render} from "react-dom";
import Header from "../components/Header/Header";
import Appcard from "../components/AppCard/AppCard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Appcard title="Appointment Set" />
      </div>
    );
  }
}

export default App;
