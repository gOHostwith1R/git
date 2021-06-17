import React from "react";

import './start-page.css';

import searchStart from '../../images/search-start.png';

const StartPage = () => {
    return (
        <div className={"start-page"}>
            <img src={searchStart} alt={searchStart}/>
            <p className={"subscriptions-start"}>Start with searching a GitHub user</p>
        </div>
    );
}

export default StartPage;