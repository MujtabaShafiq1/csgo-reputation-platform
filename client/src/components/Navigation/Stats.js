import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { ArrowIcon, DashIcon, UserIcon, LogoIcon, Weapons, ListIcon } from "../../utils/constant"
import { CustomFlexbox, StyledRateBox, StyledStatsBox } from '../UI/MUIStyledComponents'
import { Box, Typography, Divider, Container } from "@mui/material"

const Stats = () => {

    const [data, setData] = useState({ user: 0, positive: 0, neutral: 0 });

    const getData = async () => {
        const userCount = await axios.get(`https://repclone.herokuapp.com/api/user/count`)
        const feedbackCount = await axios.get(`https://repclone.herokuapp.com/api/feedback/count`)
        setData({ user: userCount.data, positive: feedbackCount.data.positiveFeedbacks, neutral: feedbackCount.data.neutralFeedbacks })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Container>
            <Divider sx={{ bgcolor: "gray", mt: "15%", mb: "2%", opacity: 0.4 }} />

            <CustomFlexbox mt={5} gap={3} flexDirection={{ xs: "column", sm: "row", lg: "row", md: "row" }}>

                <StyledStatsBox>
                    <StyledRateBox rate="Positive">
                        <Box component="img" src={ArrowIcon} />
                    </StyledRateBox>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography fontSize="22px">{data.positive}</Typography>
                        <Typography fontSize="15px" color="gray">POSITIVE FEEDBACKS</Typography>
                    </Box>
                </StyledStatsBox>

                <StyledStatsBox>
                    <StyledRateBox >
                        <Box component="img" src={DashIcon} />
                    </StyledRateBox>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography fontSize="22px">{data.neutral}</Typography>
                        <Typography fontSize="15px" color="gray">NEUTRAL FEEDBACKS</Typography>
                    </Box>
                </StyledStatsBox>

                <StyledStatsBox>
                    <StyledRateBox sx={{ backgroundColor: "lightblue" }}>
                        <Box component="img" src={UserIcon} />
                    </StyledRateBox>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start">
                        <Typography fontSize="22px">{data.user}</Typography>
                        <Typography fontSize="15px" color="gray">USERS REGISTERED</Typography>
                    </Box>
                </StyledStatsBox>

            </CustomFlexbox>

            <CustomFlexbox sx={{ marginTop: "5%", justifyContent: "space-around" }} >

                <Box sx={{
                    display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 2,
                    width: { xs: "100%", md: "50%", lg: "37%" },
                }}>
                    <Box component="img" src={LogoIcon} height="auto" sx={{ width: { xs: "50%", sm: "30%", md: "50%", lg: "50%" } }} />
                    <Typography fontSize="15px" lineHeight={1} color="gray">
                        Website to keep track of your cash trades, find trustworthy users to do transactions with and avoid risky trades by someone's transaction history. Founded in 2020.
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: "none", md: "flex", lg: "flex" }, flexDirection: "column", justifyContent: "flex-end" }} >

                    <Typography fontSize="16px" color="white">Menu CSGOREP</Typography>

                    <Box display="flex" alignItems="center" gap={1}>
                        <Box component="img" src={ListIcon} height="auto" />
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography fontSize="14px" color="gray" sx={{ "&:hover": { color: "lightblue" } }}>Browse</Typography>
                        </Link>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                        <Box component="img" src={ListIcon} height="auto" />
                        <Link to="/faq" style={{ textDecoration: "none" }}>
                            <Typography fontSize="14px" color="gray" sx={{ "&:hover": { color: "lightblue" } }}>FAQ</Typography>
                        </Link>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                        <Box component="img" src={ListIcon} height="auto" />
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            <Typography fontSize="14px" color="gray" sx={{ "&:hover": { color: "lightblue" } }}>Contact</Typography>
                        </Link>
                    </Box>

                </Box>

                <Box component="img" src={Weapons} sx={{ opacity: 0.7, display: { xs: "none", md: "none", lg: "flex" }, "&:hover": { opacity: 1 } }} />

            </CustomFlexbox>

        </Container >
    )
}

export default Stats