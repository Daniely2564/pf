import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import "semantic-ui-css/semantic.min.css";
import Contents from './components/Contents/Contents';
import Profile from './components/List/Profile/Profile';
import NodeJS from './components/List/NodeJS/NodeJS';
import ReactJS from './components/List/ReactJS/ReactJS';

class App extends Component {
  state = {
    current: 'profile',
  }
  showMain = () => {
    switch (this.state.current) {
      case 'profile': {
        return <Profile />
      }
      case 'nodejs': {
        return <NodeJS />
      }
      case 'reactjs': {
        return <ReactJS />
      }
      default: {
        return <Profile />
      }
    }
  }
  changePage = (item) => {
    this.setState({ current: item });
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.showMain()}
        </div>
        <footer className="footer">
          <Footer changePage={this.changePage} />
        </footer>
      </div>
    );
  }
}

export default App;
