import React from '../../../node_modules/react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './Menu.scss';

const Menu = () => 
<div className="conteiner">
    <div>
        <div className="menuNome">
            <h3>Paulo</h3>
        </div>
        <div className="menu">
            <div className="linkDiv">
                <br />
                <Link className="link" to="/">Home</Link>
            </div>
            <div>
                <br />
                <Link className="link" to="/bio">Bio</Link>
            </div>
            <div>
                <br />
                <Link className="link" to="/contato">Contato</Link>
            </div>
        </div>
    </div>
</div>;

export default Menu;

