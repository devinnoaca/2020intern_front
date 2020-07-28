import React from 'react';

import 'style/Main.css';
import KeywordBox from 'components/KeywordBox';
import MentorListBox from 'components/MentorListBox';

import { Container } from '@material-ui/core';

const Main = () => {
    return (
        <Container className="mainWrap">
            <KeywordBox />
            <MentorListBox />
        </Container>
    );
};

export default Main;