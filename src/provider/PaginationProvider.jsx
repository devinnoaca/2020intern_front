import React, { useState, } from 'react';
import PaginationContext from 'context/PaginationContext';

const PaginationProvider = ({ children }) => {
    const [totalPageNum, setTotalPageNum] = useState();
    const [currentPageNum, setCurrentPageNum] = useState(1);

    const Pagination = {
        totalPageNum, setTotalPageNum,
        currentPageNum, setCurrentPageNum
    };

    return (
        <PaginationContext.Provider value={Pagination}>
            {children}
        </PaginationContext.Provider>
    )
};

export default PaginationProvider;