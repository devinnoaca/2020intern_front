import React, { useState, useEffect } from 'react';

import Api from 'api/Api';
import image from 'style/logo192.png';
import MentorKeyword from './MentorKeyword';

import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        setMatchingList(props.matchinglist);
    }, [props.matchinglist]);

    useEffect(() => {
        const getMentorProfile = async () => {
            await Api
                .getUserProfile(props.matchinglist.oppositeUSN)
                .then((res) => {
                    setMentorProfile({
                        usn: res.data.USN,
                        id: res.data.ID,
                        name: res.data.userName,
                        email: res.data.email,
                        password: res.data.password,
                        description: res.data.description,
                        company: res.data.company,
                        type: res.data.type,
                    })
                })
        }

        getMentorProfile();
    }, [props.matchinglist.oppositeUSN]);

    useEffect(() => {
        const getMentorCareer = async () => {
            await Api
                .getUserCareer(props.matchinglist.oppositeUSN)
                .then((res) => {
                    if (res.data.career !== undefined){
                        setMentorCareer(res.data.career);
                    }
                })
        }

        getMentorCareer();
    }, [props.matchinglist.oppositeUSN]);

    useEffect(() => {
        const getMentorKeyword = async () => {
            await Api
                .getUserKeyword(props.matchinglist.oppositeUSN)
                .then((res) => {
                    if (res.data.allKeyword !== undefined) {
                        setMentorKeyword(res.data.allKeyword);
                    }
                })
        }

        getMentorKeyword();
    }, [props.matchinglist.oppositeUSN]);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {value}
                    {matchingList.mentor_USN} 멘토 소개
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalBodyWrap">
                    <div className="mentorB">
                        <div className="mentorBL">
                            <img src={image} alt="" />
                            <h3>{mentorProfile.userName}</h3>
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
                    <MentorKeyword keywordList={mentorKeyword} />
                    <br />
                    <hr />
                    <MentorKeyword keywordList={matchingList.keywordList} />
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
                            value={matchingList.reqReason}
                        />
                        <Button variant="contained" className="applySubmit">신청하기</Button>
                    </div>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
