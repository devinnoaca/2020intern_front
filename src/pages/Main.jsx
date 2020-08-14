import React, { useEffect, useContext } from 'react';

import 'style/Main.css';
import KeywordC from 'components/main/KeywordC';
import MentorListC from 'components/main/MentorListC';
import UserContext from 'context/UserContext';
import Cookies from 'js-cookie';

import { Container } from '@material-ui/core';

const Main = () => {
    const { setIsLogged } = useContext(UserContext);

    useEffect(() => {
        if (Cookies.get('isLogged')) {
            setIsLogged(true);
        }
    }, [setIsLogged])

    return (
        <Container className="mainW">
            <KeywordC />
            <MentorListC />
        </Container>
    );
};

export default Main;