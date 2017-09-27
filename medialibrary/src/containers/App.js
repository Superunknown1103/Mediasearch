import React, { Component, PropTypes } from 'react';
import Header from "../common/Header";

// The parent component renders the Header component and component(s) in the
// route the user navigates to.

// App is the parent of the app. Every other component is a child to it. this.props.children is where
// I render the other children components.

class App extends Component {
  render () {
    return (
      <div className="container-fluid text-center">
      <Header />
      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
