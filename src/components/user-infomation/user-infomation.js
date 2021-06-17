import  React, {Component} from 'react';

import './user-infomation.css';
import group from '../../images/group_24px.png';
import person from '../../images/person_24px.png';
import GitHubService from "../../services/git-service";


export default class UserInfo extends Component  {

    gitHubService = new GitHubService()

    state = {
        user: {},
    }

    componentDidMount() {
        this.updateUser();
    }

    onError = () => {

    }

    onLoadedUser = (user) => {
        this.setState({ user })
    }

    updateUser() {
        this.gitHubService
            .getPeople(this.props.term)
            .then(this.onLoadedUser)
            .catch(this.onError)
    }

    render() {
        const {avatarUrl, followers, following, name, login, htmlUrl } = this.state.user
        return (
            <div className={'user-info'}>
                <img className={'user-image'} src={avatarUrl} alt={'user-icon'} />
                <h2 className={"user-name"}>{name}</h2>
                <a href={htmlUrl} target={"_blank"} rel="noopener noreferrer" className={"user-github"}>{login}</a>
                <div className={"subscriptions"}>
                    <div className={"user-followers"}>
                        <img src={group} alt={'group'} className={"group-image"}/>
                        <p className={'user-followers__counter'}>{followers} followers</p>
                    </div>
                    <div className={"user-following"}>
                        <img src={person} alt={'person'} className={"person-image"}/>
                        <p className={'user-following__counter'}>{following} following</p>
                    </div>
                </div>
            </div>
        );
    }
}
