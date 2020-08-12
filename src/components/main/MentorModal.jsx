import React, { useState, useContext, useEffect } from 'react';

import image from 'style/logo192.png';

import Api from 'api/Api';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';
import MentorKeywordB from 'components/main/MentorKeywordB';
import UserContext from 'context/UserContext';
import UserKeywordContext from 'context/UserKeywordContext';
import KeywordContext from 'context/KeywordContext';
import MentorListContext from 'context/MentorListContext';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Modal from 'react-bootstrap/Modal';

export default function MentorModal(props) {
    const [reqReason, setReqReason] = useState('');
    
    const { userProfile } = useContext(UserContext);
    const { recommendKeyword } = useContext(UserKeywordContext);
    const { tempList, setTempList } = useContext(KeywordContext);
    const { textRef } = useContext(MentorListContext);

    const { sendform, setsendform, ...rest } = props;

    const createMatching = async (event) => {
        let keywordNameList = []
        let categoryNameList = []
        tempList.map((temp, index) => {
            keywordNameList.push(temp.keywordName);
            categoryNameList.push(temp.categoryName);
            return (
                <></>
            )
        })
        if (Array.isArray(keywordNameList) && keywordNameList.length === 0) {
            alert("매칭에 관한 키워드를 최소 한개는 설정해야합니다.");
        } else if (reqReason.trim() === '') {
            event.preventDefault();
            alert("멘토링 받고 싶은 내용을 입력하세요.");
        } else {
            event.preventDefault();
            await Api
                .createMatching({
                    mentorUsn: rest.pickedmentor.usn,
                    menteeUsn: userProfile.usn,
                    reqReason: reqReason,
                    keywordList: [{
                        keywordName: keywordNameList,
                        categoryName: categoryNameList,
                    }]
                })
                .then((res) => {
                    alert("멘토링 신청이 완료되었습니다. 우측상단 프로필 버튼을 누르고 내 요청목록 탭에서 확인하세요");
                    rest.onHide();
                })
            setTempList(recommendKeyword);
            setReqReason('');
        }
    };

    const handleChange = (event) => {
        setReqReason(event.target.value);
    };

    const changeSendForm = () => {
        setsendform(true);
    }

    const makeModalBody = () => {
        if (sendform) {
            return (
                <Paper component="ul">
                    멘토링 받고싶은 분야의 키워드를 선택하세요
                    <VerticalTabs />
                        멘토링받고 싶은 키워드(멘토에게 보여집니다)
                    <br />
                    <ChipsArray />
                    <div className="mentorApply">
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="멘토링 받고 싶은 내용을 자유롭게 입력하세요."
                            multiline
                            rows={4}
                            variant="outlined"
                            style={{ width: '100%' }}
                            value={reqReason}
                            onChange={handleChange}
                            ref={textRef}
                        />
                        <Button variant="contained" className="applySubmit" onClick={createMatching}>신청하기</Button>
                    </div>
                </Paper>
            )
        } else {
            return (
                <>
                    <Paper component="ul">
                        <div className="modalBodyWrap">
                            <div>멘토 상세 정보</div>
                            <div className="mentorB">
                                <div className="mentorBL">
                                    <img src={image} alt="" />
                                    <h3>{rest.pickedmentor.name}</h3>
                                    <h6>{rest.pickedmentor.email}</h6>
                                    <h6>{rest.pickedmentor.company}</h6>
                                </div>
                                <div className="mentorBR">
                                    <h4>멘토 소개 : </h4>
                                    <p>{rest.pickedmentor.description}</p>
                                    <h4>경력 :</h4>
                                    {rest.pickedmentor.career.map((career, index) => {
                                        return (
                                            <p key={index}>{career}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <MentorKeywordB usn={rest.pickedmentor.usn} />
                    </Paper>
                    <Button variant="contained" className="applySubmit" onClick={changeSendForm}>신청하기</Button>
                </>
            )
        }
    }

    useEffect(() => {
        if (rest.pickedmentor.usn) {
            const getMentorKeyword = async () => {
                await Api
                    .getUserKeyword(rest.pickedmentor.usn)
                    .then((res) => {
                    })
            }
            getMentorKeyword();
        }
    }, [rest.pickedmentor.usn]);

    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}>
            <Modal.Header closeButton onClick={() => { setTempList(recommendKeyword); setReqReason('');}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    멘토링 신청 페이지
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {makeModalBody()}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>

    );
}