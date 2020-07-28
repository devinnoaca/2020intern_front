import React from 'react';
import {Link} from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <h2>인트로페이지 입니다.</h2>
            <br/>
            <Link to={'/main'} style={{border:'1px solid'}}>메인페이지 가기</Link>
        </div>
    )
}
export default Intro;