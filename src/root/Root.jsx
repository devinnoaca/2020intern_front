import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserProvider from 'provider/UserProvider';
import UserKeywordProvider from 'provider/UserKeywordProvider';

const Root = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <UserKeywordProvider>
                    <App />
                </UserKeywordProvider>
            </UserProvider>
        </BrowserRouter>
    );
};

export default Root;