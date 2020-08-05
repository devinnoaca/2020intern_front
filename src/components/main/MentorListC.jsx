import React, { useEffect, useContext } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListB from 'components/main/MentorListB';
import MentorListContext from 'context/MentorListContext';

import Pagination from '@material-ui/lab/Pagination';

const MentorListC = () => {
    const { setMentorList } = useContext(MentorListContext);

    useEffect(() => {
        const getMentorList = async () => {
            await Api
                .getMentorList()
                .then((res)=>{
                    setMentorList(res.data.mentorList);
                })
        };

        getMentorList();
    }, [setMentorList]);

    return (
        <div className="mentorListCW">
            <MentorListB />
            <Pagination count={10} size="large" className="mentorBPagination"/>
        </div>
    );
};

export default MentorListC;