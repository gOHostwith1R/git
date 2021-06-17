import React, {Component} from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import UserInfo from "../user-infomation";
import Repositories from "../repositories";
import Footer from "../footer";
import StartPage from "../start-page";

import './app.css';

class App extends Component  {

    state = {
        clickEnter: false,
        term: ''
    }

    selectedClickEnter = (clickEnter) => {
        this.setState({
            clickEnter: true
        });
    }

    onTermChange = (term) => {
        this.setState({
            term
        });
    }

    render() {
        console.log(this.state.clickEnter)
        return (
            <Router>
                <div>
                    <Header selectedClickEnter={this.selectedClickEnter} onTermChange={this.onTermChange}/>
                    <div className={'content'}>
                        <Route path="/" exact/>
                        <Route path="/user"><UserInfo click={this.state.clickEnter} term={this.state.term}/>
                        </Route>
                        <Route path="/user">  <Repositories />
                        </Route>
                    </div>
                    <Route path="/user"  component = {Footer}/>
                </div>
            </Router>
        );
    }
}

export default App
