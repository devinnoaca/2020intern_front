import React from 'react';

const MyKeywordB = ({ keyword }) => {
    return (
        <div className="myKeywordBW">
            {keyword}
            <button>수정</button>
        </div>
    );
};

export default MyKeywordB;