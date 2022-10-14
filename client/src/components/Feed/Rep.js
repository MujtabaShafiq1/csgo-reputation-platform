import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowIcon, DashIcon, categories } from "../../utils/constant"
import { Typography, Box, Grid } from '@mui/material'
import { ThumbUp, Delete, Flag } from '@mui/icons-material';
import { AvatarContainer, CustomFlexbox, StyledFeedAvatar, StyledRateBox, ResponsiveAvatarContainer } from "../UI/MUIStyledComponents"
import axios from "axios"

const Rep = ({ feedback, deleteHandler }) => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const [positiveRate, setPositiveRate] = useState(null);

    const getUserReps = useCallback(async () => {
        const response = await axios.get(`https://repclone.herokuapp.com/api/feedback/reps/${feedback.postedUser[0].userId}`)
        setPositiveRate(response.data)
    }, [feedback.postedUser])

    useEffect(() => {
        getUserReps();
    }, [getUserReps])

    return (
        <>

            <Box sx={{ display: { xs: "none", sm: "flex", md: "flex", lg: "flex" }, alignItems: "center", paddingLeft: "5%", marginTop: 6, justifyContent: "flex-start" }}>
                <Box maxWidth="md">
                    <Typography fontSize="16px" fontWeight={500} color="gray" sx={{ cursor: "pointer" }}
                        style={{ wordWrap: "break-word" }} onClick={() => navigate(`/user/${feedback.postedUser[0].userId}`)}
                    >
                        @{feedback.postedUser[0].name}
                    </Typography>
                </Box>
                <CustomFlexbox m="2px 5px" borderRadius="10%" border="0.5px solid gray" bgcolor="rgb(25,28,32)" p="1px 5px">
                    <ThumbUp sx={{ width: 20, height: 20, pr: "10px" }} style={{ fill: "green" }} />
                    <Typography fontSize="16px" fontWeight={500} color="green">{positiveRate}</Typography>
                </CustomFlexbox>
            </Box>

            <CustomFlexbox mt={6} sx={{ display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}>
                <ResponsiveAvatarContainer onClick={() => navigate(`/user/${feedback.postedUser[0].userId}`)}>
                    <StyledFeedAvatar sx={{ width: 75, height: "auto" }} rate={feedback.rate} src={feedback.postedUser[0].img} />
                </ResponsiveAvatarContainer>
            </CustomFlexbox>

            <Grid container justifyContent="flex-end">

                <Box bgcolor="rgb(25,28,32)" borderRadius="10px" width="95%">

                    <Box textAlign="right" padding="10px 10px 0 0">
                        {categories.filter((c) => c.name === feedback.method).map(c => {
                            return <img src={c.icon} alt="" key={c.text} style={{ marginRight: "1%" }} width={23} height="auto" />
                        })}
                        {categories.filter((c) => c.name === feedback.order).map(c => {
                            return <img src={c.icon} alt="" key={c.text} width={23} height="auto" />
                        })}
                    </Box>

                    <Box sx={{ padding: "5px 2px", display: { xs: "flex", sm: "none", md: "none", lg: "none" } }}>

                        <CustomFlexbox>
                            <Typography fontSize="16px" fontWeight={500} color="gray" sx={{ cursor: "pointer" }}
                                style={{ wordWrap: "break-word" }} onClick={() => navigate(`/user/${feedback.postedUser[0].userId}`)}
                            >
                                @{feedback.postedUser[0].name}
                            </Typography>
                        </CustomFlexbox>
                        <CustomFlexbox m="2px 5px" borderRadius="10%" border="0.5px solid gray" bgcolor="rgb(25,28,32)" p="1px 5px">
                            <ThumbUp sx={{ width: 15, height: 15, pr: "5px" }} style={{ fill: "green" }} />
                            <Typography fontSize="14px" fontWeight={500} color="green">{positiveRate}</Typography>
                        </CustomFlexbox>
                    </Box>

                    <Box gap={3} sx={{
                        marginLeft: "10px", display: "flex", alignItems: "center",
                        padding: { xs: "20px 2px", sm: "20px 2px", md: "5px 2px", lg: "0px" }
                    }}
                    >
                        <AvatarContainer onClick={() => navigate(`/user/${feedback.postedUser[0].userId}`)}>
                            <StyledFeedAvatar rate={feedback.rate} src={feedback.postedUser[0].img} />
                        </AvatarContainer>

                        <StyledRateBox rate={feedback.rate}>
                            <img src={(feedback.rate === "Positive") ? ArrowIcon : DashIcon} alt="" />
                        </StyledRateBox>

                        <Box style={{ overflow: "hidden" }}>
                            <Typography
                                fontSize="17px" fontWeight={300} style={{ wordWrap: "break-word" }}
                                paddingBottom={{ xs: "10px", sm: "10px", md: "5px", lg: "8px" }}
                            >
                                <span style={{ fontWeight: 700 }}>Transaciton: </span>
                                <span style={{ color: "gray" }}>{feedback.type}:</span>
                                <span style={{ color: "gray" }}> {feedback.game}</span>
                                {feedback.amount && <span style={{ color: "gray" }}> for </span>}
                                {feedback.amount && <span style={{ color: "green" }}> ${feedback.amount}</span>}
                                <span style={{ color: "gray" }}> by </span>
                                <span style={{ color: "green" }}>{feedback.method}</span>
                            </Typography>
                            <Typography fontSize="17px" fontWeight={300} color="gray" style={{ wordWrap: "break-word" }}>
                                {feedback.description}
                            </Typography>
                        </Box>
                    </Box>

                    <CustomFlexbox sx={{ padding: "0 10px 3px 0", justifyContent: "flex-end", gap: 1 }}>
                        {/* <Typography align="right" fontSize="16px" fontWeight={100} color="#484848">{feedback.createdAt}</Typography> */}
                        <Typography align="right" fontSize="16px" fontWeight={100} color="#484848">{new Date(feedback.createdAt).toGMTString()}</Typography>

                        {user.user.userId === feedback.userId &&
                            <Delete
                                sx={{ cursor: "pointer", fill: '#922724' }}
                                onClick={() => deleteHandler(feedback._id)}
                            />
                        }

                        {(user.status && user.user.userId !== feedback.userId) &&
                            <Flag
                                sx={{ cursor: "pointer", fill: '#922724' }}
                                onClick={() => navigate("/report", { state: feedback.userId })}
                            />
                        }
                    </CustomFlexbox>

                </Box>
            </Grid>
        </>
    )
}

export default Rep