import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserProvider from 'provider/UserProvider';
import UserKeywordProvider from 'provider/UserKeywordProvider';
import PaginationProvider from 'provider/PaginationProvider';
const Root = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <UserKeywordProvider>
                    <PaginationProvider>
                        <App />
                    </PaginationProvider>
                </UserKeywordProvider>
            </UserProvider>
        </BrowserRouter>
    );
};

export default Root;