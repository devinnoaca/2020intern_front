import React from 'react';
import { Route } from 'react-router-dom'

import 'style/App.css';
import { Main, Intro, MyPage } from 'pages';
import Header from '../components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
      <Route exact path='/' component={Intro} />
      <Route exact path='/main' component={Main} />
      <Route exact path='/mypage' component={MyPage} />
      </div>
    </>
  );

};

export default App;
