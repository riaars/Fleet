import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Table from './components/Table';
import Driver from './data/driver.json';

class App extends Component {
  initialState = {
    distance: 'Distance',
    option: 0,
    isDropdownOpen: false,
  };

  state = this.initialState;

  handleChangeDistance = (value) => {
    if (value === '1') {
      this.setState({
        distance: '<=200.000 km',
        option: 1,
        isDropdownOpen: !this.state.isDropdownOpen,
      });
    } else if (value === '2') {
      this.setState({
        distance: '>200.000 km',
        option: 2,
        isDropdownOpen: !this.state.isDropdownOpen,
      });
    } else {
      this.setState(this.initialState);
    }
  };

  filteredDriver=(option)=>{
    if (option === 1) {
      return Driver.filter((item) => item.distance < 200000 || item.distance === 200000);
    } else if (option === 2) {
      return Driver.filter((item) => item.distance > 200000);
    } else return Driver;
  }

  resetFilter=()=>{
    this.setState(this.initialState)
  }

  toggleDropdown=()=>{
    this.setState({isDropdownOpen:!this.state.isDropdownOpen})
  }

  render() {
    return (
      <section className="App">
        <Header />
        <SubHeader />
        <div className="content">
          <div className="content-header">
            <Dropdown
              distance={this.state.distance}
              onClick={(e) => this.handleChangeDistance(e.target.id)}
              option={this.state.option}
              toggleDropdown={this.toggleDropdown}
              isDropdownOpen={this.state.isDropdownOpen}
            />
            <Button id="reset" text={'Reset'} onClick={() => this.resetFilter()} />
          </div>
          <div className="content-body">
            <Table drivers={this.filteredDriver(this.state.option)} />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
