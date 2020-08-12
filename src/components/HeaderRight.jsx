import React from 'react';
import { Link } from 'react-router-dom';

import NotificationC from 'components/NotificationC';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const HeaderRight = () => {
    const dropdown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    };

    const dropdown1 = () => {
        document.getElementById("myDropdown1").classList.toggle("show1");
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
            <div className="dropdown">
                <IconButton color="primary" onClick={dropdown} className="dropbtn">
                    <Avatar />
                </IconButton>
                <div id="myDropdown" className="dropdown-content">
                    <Link to='/matching'><div>내 요청목록</div></Link>
                    <Link to='/mypage'><div>내 프로필</div></Link>
                    <Link to='/myaccount'><div>내 계정설정</div></Link>
                    <hr />
                    <div>로그아웃</div>
                </div>
            </div>
            <div className="dropdown1">
                <Badge color="secondary" className="dropbtn1">
                    <MailIcon className='notificationIcon' onClick={dropdown1} />
                </Badge>
                <div id="myDropdown1" className="dropdown-content1">
                    {/* <NotificationC /> */}
                </div>
            </div>
        </div>
    )
}
export default HeaderRight;