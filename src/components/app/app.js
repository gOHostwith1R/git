import React, {Component} from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom";

import GitHubService from "../../services/git-service";


import Header from "../header";
import UserInfo from "../user-infomation";
import Repositories from "../repositories";
import Footer from "../footer";
import StartPage from "../start-page";

import './app.css';

class App extends Component  {

    gitHubService = new GitHubService()

    state = {
        clickEnter: false,
        term: '',
        user: {}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.clickEnter === true) {
            this.updateUser();
        }
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

    onLoadedUser = (user, clickEnter) => {
        this.setState({ user })
        this.setState({
            clickEnter: false
        })
    }

    updateUser() {
        this.gitHubService
            .getPeople(this.state.term)
            .then(this.onLoadedUser)
            .catch(this.onError)
    }

    render() {
        return (
            <Router>
                <div>
                    <Header selectedClickEnter={this.selectedClickEnter} onTermChange={this.onTermChange}/>
                    <div className={'content'}>
                        <Route path="/" exact/>
                        <Route path="/user"><UserInfo user={this.state.user}/>
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
