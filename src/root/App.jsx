import React from 'react';
import { Route } from 'react-router-dom';

import 'style/App.css';
import { Main, Intro, MyPage } from 'pages';
import Header from '../components/Header';
import UserProvider from 'provider/UserProvider';

const App = () => {
  return (
    <>
      <Header />
      <Container className="App">
        <UserProvider>
          <Route exact path='/' component={Intro} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/mypage' component={MyPage} />
        </UserProvider>
      </Container>
    </>
  );
};

export default App;
