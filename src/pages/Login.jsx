import React, { useRef, useContext } from 'react';

import 'style/SignUp.css';
import Api from 'api/Api';
import UserContext from 'context/UserContext';

import Cookies from 'js-cookie';

const Login = ({ history }) => {
    const id = useRef();
    const password = useRef();
    const { setIsLogged } = useContext(UserContext); 

    const submitSignUp = async (event) => {
        event.preventDefault();

        const user = {
            id: id.current.value,
            password: password.current.value,
        };

        await Api
            .login(user)
            .then((res) => {
                console.log(res.data);
                Cookies.set('usn', res.data.usn);
                Cookies.set('isLogged', true);
                setIsLogged(true);
                history.push('/main');
            })
        
    }

    return (
        <>
            <div className="signUpC">
                <h1>
                    로그인
                </h1>

                <form className="signUpForm" onSubmit={submitSignUp}>
                    <label>
                        아이디
                        <p className="input">
                            <input type="text" ref={id} maxLength="20" placeholder="" className="text" />
                        </p>
                    </label>
                    <label>
                        비밀번호
                        <p className="input">
                            <input type="password" ref={password} maxLength="20" placeholder="" className="text" />
                        </p>
                    </label>
                    <p className="submit">
                        <input type="submit" value="로그인" className="text" />
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;