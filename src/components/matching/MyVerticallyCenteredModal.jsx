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
    });
    const [mentorCareer, setMentorCareer] = useState([]);
    const [mentorKeyword, setMentorKeyword] = useState([]);
    const [matchingList, setMatchingList] = useState([]);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    useEffect(() => {
        console.log("있는상태에서 넣었냐?",props.matchinglist);
        
        setMatchingList(props.matchinglist);
    }, [props.matchinglist]);

    useEffect(() => {
        const getMentorProfile = async () => {
            await Api
                .getUserProfile()
                .then((res) => {
                    console.log("멘토프로필", res.data);
                    setMentorProfile({
                        usn: res.data.USN,
                        id: res.data.ID,
                        name: res.data.userName,
                        email: res.data.email,
                        password: res.data.password,
                        description: res.data.description,
                        company: res.data.company,
                    })
                })
        }

        getMentorProfile();
    }, []);

    useEffect(() => {
        const getMentorCareer = async () => {
            await Api
                .getUserCareer()
                .then((res) => {
                    console.log("멘토커리어", res.data.career);
                    setMentorCareer(res.data.career);
                })
        }

        getMentorCareer();
    }, []);

    useEffect(() => {
        const getMentorKeyword = async () => {
            await Api
                .getUserKeyword()
                .then((res) => {
                    console.log("멘토키워드", res.data.allKeyword);
                    setMentorKeyword(res.data.allKeyword);
                })
        }

        getMentorKeyword();
    }, []);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
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
                                    <p key={career}>{career}</p>
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
                            value={matchingList.req_reason}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="멘토 답신"
                            multiline
                            rows={4}
                            variant="outlined"
                            style={{ width: '100%' }}
                            value={matchingList.req_reason}
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
