import React, { useRef } from 'react';

import 'style/SignUp.css';

const SignUp = () => {
    const id = useRef();
    const password = useRef();
    const name = useRef();
    const email = useRef();
    const description = useRef();

    const submitSignUp = (event) => {
        event.preventDefault();

        console.log(id.current.value);
        console.log(password.current.value);
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(description.current.value);
    }

    return (
        <>
            <div className="signUpC">
                <h1>
                    회원가입
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
                    <label>
                        이름
                         <p className="input">
                            <input type="text" ref={name} maxLength="20" placeholder="" className="text" />
                        </p>
                    </label>
                    <label>
                        이메일
                        <p className="input">
                            <input type="text" ref={email} maxLength="20" placeholder="" className="text" />
                        </p>
                    </label>
                    <label>
                        자기소개
                        <p className="input">
                            <textarea type="text" ref={description} maxLength="100" placeholder="" className="text" />
                        </p>
                    </label>
                    {/* <label>
                        경력
                        <p className="input">
                            <input type="text" maxLength="20" placeholder="" className="text" />
                        </p>
                        <button>+</button>
                    </label> */}
                    <p className="submit">
                        <input type="submit" value="생성하기" className="text" />
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignUp;