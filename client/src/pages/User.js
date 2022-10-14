import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios'

import Feed from '../components/Feed/Feed';
import Loader from '../components/UI/Loader';
import CustomSnackbar from '../components/UI/CustomSnackbar';
import { SendIcon, SteamIcon, HandshakeIcon, ArrowIcon, DashIcon, searchFilters } from "../utils/constant"
import { CustomFlexbox, StyledButton, StyledUserAvatar } from '../components/UI/MUIStyledComponents';
import AnimatedPage from "../components/Animation/AnimatedPage"
import { Typography, Box, Divider, Container } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const User = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.user.userId)
    const sorting = useSelector(state => state.search.sorting)
    const filter = useSelector(state => state.search.filter)

    const [userInfo, setUserInfo] = useState({})
    const [searchId, setSearchId] = useState(id)
    const [feedbacks, setFeedbacks] = useState([])
    const [loading, setLoading] = useState(true)
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState({ status: false, details: "" })

    const userDetails = useCallback(async () => {
        setLoading(true)
        try {
            const userResponse = await axios.get(`https://repclone.herokuapp.com/api/user/${searchId}`)
            const feedbackResponse = await axios.get(`https://repclone.herokuapp.com/api/feedback/${searchId}?text=${sorting.text}&type=${sorting.type}`)
            setUserInfo(userResponse.data);
            setFeedbacks(feedbackResponse.data);

        } catch (e) {
            console.clear()
            setError({ status: true, details: e.response.data.message });
        }
        setLoading(false)
        // eslint-disable-next-line 
    }, [searchId, sorting, filter])

    const copyHandler = () => {
        navigator.clipboard.writeText(userInfo[0].url)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    useEffect(() => {
        userDetails();
        if (id) setSearchId(id)
    }, [userDetails, id])

    return (
        <AnimatedPage>
            {error.status ? <Typography variant="h3" align="center" color="gray">{error.details}</Typography> :
                <>
                    {loading ? <Loader /> :
                        <>
                            {copied && <CustomSnackbar type="info" details="Copied to clipboard" color="#7CB9E8" />}
                            <Container maxWidth="md">

                                <Box sx={{ display: { lg: "flex", xs: "block" }, gap: "20px", alignItems: "center" }} >

                                    <CustomFlexbox gap={5} >
                                        <Box>
                                            <CustomFlexbox flexDirection="column" mb="20%">
                                                <CustomFlexbox borderRadius="50%" zIndex="1" bgcolor="green" width={30} height={30} marginBottom="-20%">
                                                    <Box component="img" src={ArrowIcon} alt="" width={15} height="auto" />
                                                </CustomFlexbox>
                                                <StyledUserAvatar sx={{ color: "green", border: "2px solid green" }}>{userInfo.positive}</StyledUserAvatar>
                                            </CustomFlexbox>
                                            <CustomFlexbox flexDirection="column" >
                                                <CustomFlexbox borderRadius="50%" zIndex="1" bgcolor="orange" width={30} height={30} marginBottom="-20%">
                                                    <Box component="img" src={DashIcon} alt="" width={15} height="auto" />
                                                </CustomFlexbox>
                                                <StyledUserAvatar sx={{ color: "orange", border: "2px solid orange" }}>{userInfo.neutral}</StyledUserAvatar>
                                            </CustomFlexbox>
                                        </Box>

                                        <Box>
                                            <CustomFlexbox sx={{ borderRadius: "50%", backgroundColor: "#0e0f11", width: 215, height: 215 }}>
                                                <CustomFlexbox sx={{
                                                    backgroundColor: "#161616",
                                                    borderRadius: "50%",
                                                    width: 180,
                                                    height: 180,
                                                    zIndex: 1,
                                                    border: (userInfo.positive > userInfo.neutral) ? "1px solid green" : "0.5px solid orange",
                                                }}>
                                                    <StyledUserAvatar sx={{ width: 140, height: 140 }} src={userInfo[0].img} />
                                                </CustomFlexbox>
                                            </CustomFlexbox>
                                        </Box>

                                    </CustomFlexbox>

                                    <Container maxWidth="sm">

                                        <Box display="flex" flexDirection="column" justifyContent="center" gap={2}>
                                            <Typography fontSize="24px">{userInfo[0].name}</Typography>

                                            <Box sx={{ width: "100%", display: "flex", alignItems: "center", bgcolor: "#0e0f11", padding: "13px", gap: 3 }}>
                                                <Typography fontSize="15px" style={{ overflow: "hidden" }}>{userInfo[0].url}</Typography>
                                                <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={copyHandler} />
                                            </Box>

                                            <Box display="flex" alignItems="center" gap={1}>
                                                <img src={HandshakeIcon} alt="" />
                                                <Typography fontWeight={700}>Done Deals: </Typography>
                                                {userInfo.neutral + userInfo.positive}
                                            </Box>
                                            <Box display="flex" alignItems="center" gap={2}>
                                                <Typography sx={{ color: "gray" }}>Linked Accounts: </Typography>
                                                <img src={SteamIcon} alt="" />
                                            </Box>
                                        </Box>
                                    </Container>
                                </Box>
                            </Container>

                            {userId !== userInfo[0].userId
                                &&
                                <CustomFlexbox marginTop="4%">
                                    <StyledButton onClick={() => { navigate('/feedback', { state: userInfo[0].userId }); }}>
                                        Add feedback
                                        <img src={SendIcon} alt="" />
                                    </StyledButton>
                                </CustomFlexbox>
                            }

                            <Divider sx={{ bgcolor: "gray", mt: "3%", mb: "1%", opacity: 0.4 }} />

                            <CustomFlexbox gap="5%" flexDirection={{ xs: "column", sm: "row", lg: "row", md: "row" }}>
                                <CustomFlexbox gap={1} sx={{ marginTop: "2%", justifyContent: "space-between", width: { xs: "60%", sm: "auto", md: "auto", lg: "auto" } }}>
                                    <Box component="img" src={searchFilters[3].icon} height="auto" />
                                    <Typography fontSize="17px">{searchFilters[3].value} deals: </Typography>
                                    {feedbacks.filter(c => (searchFilters[3].text.includes(c.method) && (!searchFilters[1].text.includes(c.type)))).length}
                                </CustomFlexbox>
                                <CustomFlexbox gap={1} sx={{ marginTop: "2%", justifyContent: "space-between", width: { xs: "60%", sm: "auto", md: "auto", lg: "auto" } }}>
                                    <Box component="img" src={searchFilters[2].icon} height="auto" />
                                    <Typography fontSize="17px">{searchFilters[2].value} deals: </Typography>
                                    {feedbacks.filter(c => (searchFilters[2].text.includes(c.method) && (!searchFilters[1].text.includes(c.type)))).length}
                                </CustomFlexbox>
                                <CustomFlexbox gap={1} sx={{ marginTop: "2%", justifyContent: "space-between", width: { xs: "60%", sm: "auto", md: "auto", lg: "auto" } }}>
                                    <Box component="img" src={searchFilters[1].icon} height="auto" />
                                    <Typography fontSize="17px">{searchFilters[1].value} deals: </Typography>
                                    {feedbacks.filter(c => (searchFilters[1].text.includes(c.type))).length}
                                </CustomFlexbox>
                            </CustomFlexbox>

                            <Divider sx={{ bgcolor: "gray", mt: "3%", mb: "5%", opacity: 0.4 }} />
                            <Feed feedbacks={feedbacks} />
                        </>
                    }
                </>
            }
        </AnimatedPage>

    )
}

export default User