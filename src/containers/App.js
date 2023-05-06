import React, { Component } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
import './app.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";
class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        });
        
    }
    onSearchCahnge = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
render () {
    const {robots , searchfield } = this.state
    const fileteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if ( !robots.length) {
        return <h1>Loading</h1>
    } else {
    return (
        <div className="tc">
        <h1>RoboFreinds</h1>
        < SearchBox  searchChange={this.onSearchCahnge}/>
        <Scroll>
        <ErrorBoundry>
            < CardList robots={fileteredRobot}/>
        </ErrorBoundry>
        </Scroll>
        </div>
    )
    }
}
}
export default App;
