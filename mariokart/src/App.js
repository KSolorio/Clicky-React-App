import React, { Component } from 'react';
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"


class App extends Component {
  render() {
    return (
      <div className= "App">
        <div class= "container">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
