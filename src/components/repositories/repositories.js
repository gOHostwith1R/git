import React, {useState} from "react";

import GitHubService from "../../services/git-service";

import './repositories.css';

const Repositories = ({term}) => {

    return (
      <div className={"repositories"}>
          <h2 className={"repositories-title"}>Repositories {2}</h2>
                  <div className={"list-item"}>
                  <h2 className={"list-item__title"}>
                      1
                  </h2>
                  <h3 className={"list-item__subtitle"}>
                      2
                  </h3>
              </div>
      </div>
    );
}

export default Repositories;