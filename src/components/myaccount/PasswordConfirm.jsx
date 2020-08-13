import React from 'react'

const PasswordConfirm = (props) => {
    const handleClick = () => {
        props.setislogin(true);
    } 


    return (
        <div>
            <div><h1>본인 확인</h1></div>
            <div><input type="password" placeholder="비밀번호를 입력하세요"/><button onClick={handleClick}>확인</button></div>
        </div>
    )
}

export default PasswordConfirm;