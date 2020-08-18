import React from 'react';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';
import 'style/Header.css';
import HeaderRight from './HeaderRight';

import Container from '@material-ui/core/Container';

const Header = () => {
    return (
        (Cookies.get('isLogged'))
            ? (
                <div className="header">
                    <Container id="headerContainer" maxWidth="lg">
                        <div id="logo"><Link to='/main'>logo</Link></div>
                        <HeaderRight />
                    </Container>
                </div>
            )
            : (
                <div className="header">
                    <Container id="headerContainer" maxWidth="lg">
                        <div id="logo"><Link to='/'>logo</Link></div>
                        <HeaderRight />
                    </Container>
                </div>
            )

    )
};

export default Header;



