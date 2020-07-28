import React from 'react';
import {Link} from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const HeaderRight = () => {
    const dropdown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    };

    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    return (
        <div className="headerRightWrap">
            <Badge color="secondary" variant="dot" >
                <MailIcon />
            </Badge>
            <div className="dropdown">
                <IconButton color="primary" onClick={dropdown} className="dropbtn">
                    <Avatar src="/broken-image.jpg" />
                </IconButton>
                <div id="myDropdown" className="dropdown-content">
                    <Link to='/login'><div>내 요청목록</div></Link>
                    <Link to='/mypage'><div>내 프로필</div></Link>
                    <Link to='/login'><div>내 계정설정</div></Link>
                    <hr/>
                    <div>로그아웃</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderRight;