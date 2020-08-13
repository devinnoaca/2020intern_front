import React from 'react';

const ChangeEmail = () => {
    return (
        <div className="changeEmailWrap">
            <div><h1>변경할 이메일을 입력해주세요</h1></div>
            <div><input type="text" /><button>인증번호발송</button></div>
            <div><input type="text" /><button>확인</button></div>
        </div>
    )
}

export default ChangeEmail;