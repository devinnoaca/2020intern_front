import React from 'react';
import { Link } from 'react-router-dom';

import 'style/Header.css';
import HeaderRight from './HeaderRight';

import Container from '@material-ui/core/Container';

const Header = () => {
    const loginChecked='1';
    return (
        <div className="header">
            <Container id="headerContainer" maxWidth="lg">
                <div id="logo"><Link to='/'>logo</Link></div>
                {(loginChecked === '0')
                    ? (
                        <div id="login">
                            <Link to='/login'>login</Link>
                        </div>
                    )
                    : (
                        <HeaderRight />
                    )}
            </Container>
        </div>
    )
}
export default Header;



