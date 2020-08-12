import React from 'react';
import { Link } from 'react-router-dom';

import 'style/Header.css';
import HeaderRight from './HeaderRight';

import Container from '@material-ui/core/Container';

const Header = () => {
    const loginChecked = '1';

    return (
        <div className="header">
            <Container id="headerContainer" maxWidth="lg">
                {(loginChecked === '0')
                    ? (
                        <>
                        <div id="logo"><Link to='/'>logo</Link></div>
                        <div id="login">
                            <Link to='/login'>login</Link>
                        </div>
                        </>
                    )
                    : (
                        <>
                        <div id="logo"><Link to='/main'>logo</Link></div>
                        <HeaderRight />
                        </>
                    )}
            </Container>
        </div>
    )
};

export default Header;



