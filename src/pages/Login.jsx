import React, { useRef } from 'react';

import 'style/SignUp.css';

const Login = () => {
    const id = useRef();
    const password = useRef();

    const submitSignUp = (event) => {
        event.preventDefault();

        console.log(id.current.value);
        console.log(password.current.value);
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
                        <input type="submit" value="생성하기" className="text" />
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;