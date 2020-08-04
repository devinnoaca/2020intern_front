import React from 'react';

const MyKeywordB = ({ keyword }) => {
    const makeKeyword = () => {
        if (keyword[0] === undefined) {
            return (
                <div></div>
            );
        } else {
            return (
                keyword.map((keyword, index) => {
                    return (
                        <div key={index}>{keyword.keywordName}</div>
                    );
                })
            );
        }
    };

    return (
        <div className="myKeywordBW">
            {makeKeyword()}
            <button>수정</button>
        </div>
    );
};

export default MyKeywordB;