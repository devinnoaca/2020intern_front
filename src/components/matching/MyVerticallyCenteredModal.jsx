import React, { useState, useEffect, useContext } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import MatchingKeyword from './MatchingKeyword';
import UserContext from 'context/UserContext';

import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function MyVerticallyCenteredModal(props) {
    const [value, setValue] = useState();
    const [mentorProfile, setMentorProfile] = useState({
        usn: '',
        name: '',
        email: '',
        password: '',
        description: '',
        company: '',
        type: '',
    });
    const [mentorCareer, setMentorCareer] = useState([]);
    const [mentorKeyword, setMentorKeyword] = useState([]);
    const [matchingList, setMatchingList] = useState([]);
    const { userProfile } = useContext(UserContext);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        setMatchingList(props.matchinglist);
    }, [props.matchinglist]);

    useEffect(() => {
        if (props.matchingList !== undefined) {
            const getMentorProfile = async () => {
                await Api
                    .getUserProfile(props.matchinglist.oppositeUsn)
                    .then((res) => {
                        setMentorProfile({
                            usn: res.data.USN,
                            id: res.data.ID,
                            name: res.data.name,
                            email: res.data.email,
                            password: res.data.password,
                            description: res.data.description,
                            company: res.data.company,
                            type: res.data.type,
                        })
                    })
            }

            getMentorProfile();
        }
    }, [props.matchinglist.oppositeUsn, props.matchingList]);

    useEffect(() => {
        if (props.matchingList !== undefined) {
            const getMentorCareer = async () => {
                await Api
                    .getUserCareer(props.matchinglist.oppositeUsn)
                    .then((res) => {
                        if (res.data.career !== undefined) {
                            setMentorCareer(res.data.career);
                        }
                    })
            }

            getMentorCareer();
        }
    }, [props.matchinglist.oppositeUsn, props.matchingList]);

    useEffect(() => {
        if (props.matchingList !== undefined) {
            const getMentorKeyword = async () => {
                await Api
                    .getUserKeyword(props.matchinglist.oppositeUsn)
                    .then((res) => {
                        if (res.data.allKeyword !== undefined) {
                            setMentorKeyword(res.data.allKeyword);
                        }
                    })
            }

            getMentorKeyword();
        }
    }, [props.matchinglist.oppositeUsn, props.matchingList]);

    const editMatching = async (matchingState) => {
        if (refuseValue.trim() === '') {
            alert("사유를 입력해주세요");
        } else {
            await Api
                .editMatching(matchingList.matchingId, {
                    "resMessage": refuseValue,
                    "state": matchingState,
                    "menteeUsn": matchingList.oppositeUsn,
                    "mentorUsn": userProfile.usn,
                })
                .then((res) => {
                    alert("처리되었습니다.")
                    console.log("매챙수정하기",res.data);
                })
            props.onHide();
        }
    }

    const [refuseValue, setRefuseValue] = useState(' ');

    const handleChange = (event) => {
        setRefuseValue(event.target.value);
    };

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    멘토링 요청 상세 정보
                </Modal.Title>
            </Modal.Header>
            {(userProfile.type === 0)
                ? (
                    <>
                        {(value === 1 || value === 2)
                            ? (
                                <Modal.Body>
                                    <Paper component="ul">
                                        <div className="modalBodyWrap">
                                            <div>내가 요청한 멘토 상세 정보</div>
                                            <div className="mentorB">
                                                <div className="mentorBL">
                                                    <img src={image} alt="" />
                                                    <h3>{mentorProfile.name}</h3>
                                                    <h6>{mentorProfile.email}</h6>
                                                    <h6>{mentorProfile.company}</h6>
                                                </div>
                                                <div className="mentorBR">
                                                    <h4>멘토 소개 : </h4>
                                                    <p>{mentorProfile.description}</p>
                                                    <h4>경력 :</h4>
                                                    {mentorCareer.map((career) => {
                                                        return (
                                                            <p key={career.ID}>{career.content}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <MatchingKeyword useFor={'멘토'} keywordList={mentorKeyword} />
                                    </Paper>
                                    <Paper component="ul">
                                        <div>멘토링 요청 내용</div>
                                        <div className="mentorApply">
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="신청한 내용"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                style={{ width: '100%' }}
                                                value={matchingList.reqReason}
                                            />
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="멘토 답신"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                style={{ width: '100%' }}
                                                value={matchingList.resReason}
                                            />
                                        </div>
                                        <MatchingKeyword useFor={'멘토링 내용'} keywordList={matchingList.keywordList} />
                                    </Paper>
                                </Modal.Body>
                            )
                            : (
                                <Modal.Body>
                                    <Paper component="ul">
                                        <div className="modalBodyWrap">
                                            <div>내가 요청한 멘토 상세 정보</div>
                                            <div className="mentorB">
                                                <div className="mentorBL">
                                                    <img src={image} alt="" />
                                                    <h3>{mentorProfile.name}</h3>
                                                    <h6>{mentorProfile.email}</h6>
                                                    <h6>{mentorProfile.company}</h6>
                                                </div>
                                                <div className="mentorBR">
                                                    <h4>멘토 소개 : </h4>
                                                    <p>{mentorProfile.description}</p>
                                                    <h4>경력 :</h4>
                                                    {mentorCareer.map((career) => {
                                                        return (
                                                            <p key={career.ID}>{career.content}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <MatchingKeyword useFor={'멘토'} keywordList={mentorKeyword} />
                                    </Paper>
                                    <Paper component="ul">
                                        <div>멘토링 요청 내용</div>
                                        <div className="mentorApply">
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="신청한 내용"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                style={{ width: '100%' }}
                                                value={matchingList.reqReason}
                                            />
                                        </div>
                                        <MatchingKeyword useFor={'멘토링 내용'} keywordList={matchingList.keywordList} />
                                    </Paper>
                                </Modal.Body>
                            )
                        }
                    </>

                )
                : (
                    <Modal.Body>
                        <Paper component="ul">
                            <div className="modalBodyWrap">
                                <div>나에게 요청한 멘티 정보</div>
                                <div className="mentorB">
                                    <div className="mentorBL">
                                        <img src={image} alt="" />
                                        <h3>{mentorProfile.name}</h3>
                                        <h6>{mentorProfile.email}</h6>
                                        <h6>{mentorProfile.company}</h6>
                                    </div>
                                    <div className="mentorBR">
                                        <h4>멘티 소개 : </h4>
                                        <p>{mentorProfile.description}</p>
                                        <h4>경력 :</h4>
                                        {mentorCareer.map((career) => {
                                            return (
                                                <p key={career.ID}>{career.content}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <MatchingKeyword useFor={'멘티'} keywordList={mentorKeyword} />
                        </Paper>
                        <Paper component="ul">
                            <div>멘토링 요청 내용</div>
                            <div className="mentorApply">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="신청한 내용"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    value={matchingList.reqReason}
                                />
                                {(value === 0)
                                    ? (
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="멘토 답신"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            style={{ width: '100%' }}
                                            value={refuseValue}
                                            onChange={handleChange}
                                        />
                                    )
                                    : (
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="멘토 답신"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            style={{ width: '100%' }}
                                            value={matchingList.resReason}
                                        />
                                    )
                                }

                            </div>
                            <MatchingKeyword useFor={'멘토링 내용'} keywordList={matchingList.keywordList} />
                        </Paper>

                    </Modal.Body>
                )
            }
            <Modal.Footer>
                {(value === 0 && userProfile.type === 1)
                    ? (
                        <>
                            <Button variant="contained" className="applySubmit" onClick={() => {editMatching(1); setValue(1)}}>수락</Button>
                            <Button variant="contained" className="applySubmit" onClick={() => {editMatching(2); setValue(2)}}>거절</Button>
                        </>
                    )
                    : (
                        <Button onClick={props.onHide}>Close</Button>
                    )}
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
