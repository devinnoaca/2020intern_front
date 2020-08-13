import React from 'react';

import 'style/MyAccount.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordConfirm from 'components/myaccount/PasswordConfirm';
import SetAccount from 'components/myaccount/SetAccount';
import { useState } from 'react';

const MyAccount = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div className="MyAccountabovepaperWrap">
            {(isLogin === false)
                ? (
                    <PasswordConfirm setislogin={setIsLogin} />
                )
                : (
                    <SetAccount />
                )}
        </div>
    )
}

export default MyAccount;