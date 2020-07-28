import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'

import 'style/App.css';
import Api from 'api/Api';
import { Main, Intro, MyPage } from 'pages';

const App = () => {
  const greeting = async () => {
    await Api.greeting()
      .then((res) => {
        console.log(res.data);
      });
  };

  greeting();

  useEffect(() => {
    console.log('hi');
  });

  return (
    <div className="App">
      <Route exact path='/' component={Intro} />
      <Route exact path='/main' component={Main} />
      <Route exact path='/mypage' component={MyPage} />
    </div>
  );

};

export default App;
