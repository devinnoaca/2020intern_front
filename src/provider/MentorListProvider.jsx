import React, { useState, useRef } from 'react';
import MentorListContext from 'context/MentorListContext';

const MentorListProvider = ({ children }) => {
    const [mentorList, setMentorList] = useState([]);
    const textRef = useRef();

    const mentorListKeyword = {
        mentorList, setMentorList, textRef,
    };

    return (
        <MentorListContext.Provider value={mentorListKeyword}>
            {children}
        </MentorListContext.Provider>
    )
};

export default MentorListProvider;