import React, { useEffect, useState, useContext } from 'react'

import Api from 'api/Api';
import UserContext from 'context/UserContext';

const NotificationC = () => {
    const [notificatonList, setNotificationList] = useState([]);
    const { userProfile } = useContext(UserContext);

    useEffect(() => {
        const getNotification = () => {
            Api
                .getNotification(userProfile.usn)
                .then((res) => {
                    console.log(res.data);
                    setNotificationList(notificatonList);
                })
        }
        getNotification();
    });
    
    return (
        <div>
            {notificatonList.map((noti, index) => {
                return( 
                    <div key={index}>
                        <h1>{noti.oppositeUsn}</h1>
                    </div>
                )
            })}
        </div>
        
    )
}

export default NotificationC;