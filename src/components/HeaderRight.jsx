import React, { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';

import Api from 'api/Api';
import NotificationList from './NotificationList';
import UserContext from 'context/UserContext';

import Cookies from 'js-cookie';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

const HeaderRight = () => {
    const { setIsLogged } = useContext(UserContext);
    const [notificatonList, setNotificationList] = useState([]);
    const { userProfile } = useContext(UserContext);
    const [logoutValue, setLogoutValue] = useState(false);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

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

    useEffect(() => {
        if (userProfile.usn) {
            const getNotification = () => {
                Api
                    .getNotification(userProfile.usn)
                    .then((res) => {
                        console.log("알림리스트", res.data);
                        setNotificationList(res.data.notification);
                    })
            }

            getNotification(userProfile.usn);
        }
    }, [userProfile.usn]);

    const logout = () => {
        Cookies.remove('isLogged');
        Cookies.remove('usn');
        setIsLogged(false);
        if(logoutValue === false) {
            setLogoutValue(true);
        } else {
            setLogoutValue(false);
        }
    }

    return (
        (Cookies.get('isLogged'))
            ? (
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
                            <Link to='/'><div onClick={logout}>로그아웃</div></Link>
                        </div>
                    </div>
                    <div className="dropdown1">
                        <Badge color="secondary" className="dropbtn1">
                            <MailIcon className='notificationIcon' onClick={toggleDrawer("right", true)} />
                        </Badge>
                        <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                            <NotificationList notificatonList={notificatonList} toggleDrawer={toggleDrawer} anchor={'right'} />
                        </Drawer>
                    </div>
                </div>
            )
            : (
                <div className="headerRightWrap">
                    <div>
                        <Link to='/login'>로그인</Link>
                    </div>
                    <div>
                        <Link to='/signup'>회원가입</Link>
                    </div>
                </div>
            )
    )


}
export default HeaderRight;