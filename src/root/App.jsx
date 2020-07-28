import React from 'react';
import { Route } from 'react-router-dom'

import 'style/App.css';
import { Main, Intro, MyPage } from 'pages';
import UserProvider from 'provider/UserProvider';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Route exact path='/' component={Intro} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/mypage' component={MyPage} />
      </UserProvider>
    </div>
  );
};

export default App;
