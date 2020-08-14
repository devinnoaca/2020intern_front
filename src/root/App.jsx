import React, { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';

import 'style/App.css';
import { SignUp, Login, Main, Intro, MyPage, Matching, MyAccount } from 'pages';
import Header from '../components/Header';
import Api from 'api/Api';
import UserContext from 'context/UserContext';
import UserKeywordContext from 'context/UserKeywordContext';
import KeywordProvider from 'provider/KeywordProvider';
import MentorListProvider from 'provider/MentorListProvider';

import Cookies from 'js-cookie';

import Container from '@material-ui/core/Container';

const App = () => {
  const { userProfile, setUserProfile } = useContext(UserContext);
  const { setAllKeyword, setrecommendKeyword } = useContext(UserKeywordContext);

  useEffect(() => {
    const getUserProfile = async () => {
      await Api
        .getUserProfile(Cookies.get('token'))
        .then((res) => {
          setUserProfile({
            usn: res.data.USN,
            id: res.data.ID,
            name: res.data.name,
            email: res.data.email,
            description: res.data.description,
            company: res.data.company,
            image_url: res.data.image_url,
            type: res.data.type,
          });
        });
    };

    getUserProfile();
  }, [setUserProfile]);


  useEffect(() => {
    const getUserKeyword = async () => {
      await Api
        .getUserKeyword(userProfile.usn)
        .then((res) => {
          setAllKeyword(res.data.allKeyword);
          setrecommendKeyword(res.data.recommendKeyword);
        });
    };
    getUserKeyword();

  }, [setAllKeyword, setrecommendKeyword, userProfile.usn]);

  return (
    <>
      <Header />
      <Container className="App">
        <KeywordProvider>
          <MentorListProvider>
            <Route exact path='/' component={Intro} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/mypage' component={MyPage} />
            <Route exact path='/matching' component={Matching} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
          </MentorListProvider>

        </KeywordProvider>

      </Container>
    </>
  );
};

export default App;
