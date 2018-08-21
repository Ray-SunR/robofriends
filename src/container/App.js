import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { ReceiveRobotData, ChangeSearchField } from '../actions';
import Header from '../components/Header';

class App extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.props.onRobotDataRecieved(users);
            });
    }

    render() {
        let filteredRobots = this.props.robots;
        if (this.props.searchField) {
            filteredRobots = this.props.robots.filter((robot) => {
                return robot.name.toLowerCase().startsWith(this.props.searchField.toLowerCase());
            });
        }
        return (
            <div className="pa2 tc">
                <Header />
                <SearchBox onSearchChange={this.props.onSearchFieldChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default connect((state) => ({
    ...state
}), (dispatch) => ({
    onRobotDataRecieved: (robots) => {
        dispatch(ReceiveRobotData(robots))
    },
    onSearchFieldChange: (event) => {
        event.preventDefault();
        dispatch(ChangeSearchField(event));
    }
}))(App);