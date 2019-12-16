import React from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = props => {
    return (
        <div className="header">
            <Link to={props.pagAnterior}>
                <img className="header-img" src={props.logo} alt="Logo"/>
            </Link>
            <span className="header-title"> {props.titulo} </span>
        </div>
    )
}

export default Header;
