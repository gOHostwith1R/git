import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";

import './header.css';
import gitGubIcon  from '../../images/Vector.png'

class Header extends Component {

    view = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            this.props.history.push('/user');
            this.props.selectedClickEnter(e.keyCode);
        }
    }

    onTermChange = (e) => {
       this.props.onTermChange(e.target.value);
    }

    render() {
        return(
            <div className='header'>
                <Link to={"/"}>
                    <img className={'header-image'} src={gitGubIcon} alt={"GitHub icon"}  />
                </Link>
                <form className={"header-form"}>
                    <input className={"header-input"} type="text" placeholder="Enter GitHub username" value={this.props.term}
                           onChange={this.onTermChange}
                           onKeyDown={this.view}>
                    </input>
                </form>
            </div>
        );
    }
}

export default withRouter(Header);