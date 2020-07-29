import React from 'react';

import 'style/Main.css';
import KeywordC from 'components/KeywordC';
import MentorListC from 'components/MentorListC';

import { Container } from '@material-ui/core';

const Main = () => {
    return (
        <Container className="mainW">
            <KeywordC />
            <MentorListC />
        </Container>
    );
};

export default Main;