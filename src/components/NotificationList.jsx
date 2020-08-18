import React, { useContext } from 'react';

import UserContext from 'context/UserContext';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
});

const NotificationList = ({ anchor, toggleDrawer, notificatonList}) => {
    const classes = useStyles();
    //const [notificatonList, setNotificationList] = useState([]);
    const { userProfile } = useContext(UserContext);

    const handleNoti = (noti) => {
        if (userProfile.type === 0) {
            if (noti.matchingState === 1) {
                return (
                    <>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={noti.oppositeName + "님이 멘토링요청을 수락하셨습니다."} />
                        <ListItemText primary={"알림시각 "+noti.time} />
                    </>
                )
            }
            if (noti.matchingState === 2) {
                return (
                    <>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={noti.oppositeName + "님이 멘토링 요청을 거절하셨습니다."} />
                        <ListItemText primary={"알림시각 " +noti.time} />
                    </>
                )
            }
        } else {
            if (noti.matchingState === 0) {
                return (
                    <>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={noti.oppositeName + "님이 멘토링을 요청하셨습니다."} />
                        <ListItemText primary={"알림시각 " +noti.time} />
                    </>
                )
            }
        }
    }

    

    return (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem ><h1>알림 리스트</h1></ListItem>
                <hr/>
                {notificatonList.map((noti, index) => (

                    <ListItem key={index} style={{display:'flex', flexDirection:'column'}}>
                        {handleNoti(noti)}
                    </ListItem>


                ))}
            </List>



        </div>
    )
}

export default NotificationList;