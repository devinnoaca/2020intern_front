import React from 'react';

const ChangePassword = () => {
    return (
        <div className="changePasswordWrap">
            <div><h1>변경할 비밀번호를 입력해주세요</h1></div>
            <div><input type="text" placeholder="새 비밀번호" /></div>
            <div><input type="text" placeholder="새 비밀번호 확인" /></div>
            <div><button>비밀번호 변경</button></div>
            
        </div>
    )
}

export default ChangePassword;