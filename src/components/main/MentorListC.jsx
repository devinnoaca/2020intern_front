import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';

const MentorListC = () => {
    const { setMentorList } = useContext(MentorListContext);

    useEffect(() => {
        const getMentorList = async () => {
            await Api
                .getMentorList()
                .then((res)=>{
                    console.log("검색한 멘토리스트 : ",res.data.mentorList);
                    setMentorList(res.data.mentorList);
                })
        };

        getMentorList();
        console.log("mentorListC getMentorList useEffect");
    }, [setMentorList]);

    return (
        <div className="mentorListCW">
            <MentorListB />
            <div>pagination</div>
        </div>
    );
};

export default MentorListC;