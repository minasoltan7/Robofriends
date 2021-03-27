import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js'

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: " "
        }

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return (robot.name.toLowerCase().includes(searchfield.toLowerCase()))
        })

        // clean code than : if(robots.lengths===0)
        if (!robots.length) {
            return <h1 className='tc'>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1 ma3'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;