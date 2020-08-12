import React, { useState, useContext, useEffect } from 'react';

import Api from 'api/Api';
import 'style/Main.css';
import MentorListContext from 'context/MentorListContext';
import image from 'style/logo192.png';
import ChipsArray from "components/main/ChipsArray";
import VerticalTabs from 'components/main/VerticalTabs';
import MentorKeywordB from 'components/main/MentorKeywordB';
import KeywordContext from 'context/KeywordContext';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

const MentorListB = () => {
    const classes = useStyles();
    const [pickedMentor, setPickedMentor] = useState({

        usn: '',
        name: '',
        imageUrl: '',
        email: '',
        description: '',
        company: '',
        career: [],
    });
    const { mentorList } = useContext(MentorListContext);
    const { tempList } = useContext(KeywordContext);
    const [modalShow, setModalShow] = useState(false);
    const [sendForm, setSendForm] = useState(false);

    function MyVerticallyCenteredModal(props) {
        const[reqReason, setReqReason] = useState('');

        const createMatching = async (event) => {
            console.log(event.target);
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
                        mentorUsn: pickedMentor.usn,
                        menteeUsn: 4,
                        reqReason: reqReason,
                        keywordList: [{
                            keywordName: keywordNameList,
                            categoryName: categoryNameList,
                        }]
                    })
                    .then((res) => {
                        console.log("매칭만들어졋냐?", res.data);
                        alert("멘토링 신청이 완료되었습니다. 우측상단 프로필 버튼을 누르고 내 요청목록 탭에서 확인하세요");
                        props.onHide();
                    })
            }
        };

        const handleChange = (event) => {
            setReqReason(event.target.value);
            console.log(reqReason);
        };

        const changeSendForm = () => {
            setSendForm(true);
        }

        const makeModalBody = () => {
            if (sendForm) {
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
                                className="reqReason"
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
                                        <h3>{pickedMentor.name}</h3>
                                        <h6>{pickedMentor.email}</h6>
                                        <h6>{pickedMentor.company}</h6>
                                    </div>
                                    <div className="mentorBR">
                                        <h4>멘토 소개 : </h4>
                                        <p>{pickedMentor.description}</p>
                                        <h4>경력 :</h4>
                                        {pickedMentor.career.map((career) => {
                                            return (
                                                <p key={career}>{career}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <MentorKeywordB usn={pickedMentor.usn} />
                        </Paper>
                        <Button variant="contained" className="applySubmit" onClick={changeSendForm}>신청하기</Button>
                    </>
                )
            }
        }

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        멘토링 신청 페이지
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {makeModalBody()}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>

        );
    }

    useEffect(() => {
        const getMentorKeyword = async () => {
            await Api
                .getUserKeyword(pickedMentor.usn)
                .then((res) => {
                    console.log("맨토디테일에서 멘토 키워드띄울꺼야", res.data);
                })
        }
        getMentorKeyword()
    });

    return (
        <>
            <Grid container spacing={4} className="mentorListBW">
                {mentorList.map((mentor) => {
                    return (
                        <Grid key={mentor.usn} item xs={12} sm={4} onClick={()=>{setModalShow(true);setPickedMentor(mentor);setSendForm(false);}}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={image}
                                        title="mentorImage" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {mentor.name} 멘토
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            {mentor.email}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="p">
                                            회사 : {mentor.company}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        자세히 보기
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop='static'
            />
        </>
    );
};

export default MentorListB;
