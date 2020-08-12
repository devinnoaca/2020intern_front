import React, { useState,  } from 'react';
import MentorListContext from 'context/MentorListContext';

const MentorListProvider = ({ children }) => {
    const [mentorList, setMentorList] = useState([]);

    const mentorListKeyword = {
        mentorList, setMentorList,
    };

    return (
        <MentorListContext.Provider value={mentorListKeyword}>
            {children}
        </MentorListContext.Provider>
    )
};

export default MentorListProvider;