import React from 'react';
import { Route } from 'react-router-dom';

import 'style/App.css';
import { Main, Intro, MyPage } from 'pages';
import Header from '../components/Header';
import UserProvider from 'provider/UserProvider';
import KeywordProvider from 'provider/KeywordProvider';
import UserKeywordProvider from 'provider/UserKeywordProvider';
import MentorListProvider from 'provider/MentorListProvider';

import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <>
      <Header />
      <Container className="App">
        <UserProvider>
          <KeywordProvider>
            <UserKeywordProvider>
              <MentorListProvider>
                <Route exact path='/' component={Intro} />
                <Route exact path='/main' component={Main} />
                <Route exact path='/mypage' component={MyPage} />
              </MentorListProvider>
            </UserKeywordProvider>
          </KeywordProvider>
        </UserProvider>
      </Container>
    </>
  );
};

export default App;
