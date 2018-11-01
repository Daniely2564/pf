import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import "semantic-ui-css/semantic.min.css";
import Contents from './components/Contents/Contents';
import Profile from './components/List/Profile/Profile';

class App extends Component {
  state = {
    current: 'profile',
  }
  showMain = () => {
    switch (this.state.current) {
      case 'profile': {
        return <Profile />
      }
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.showMain()}
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
