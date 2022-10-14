import { useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";

import { Typography, Box, Grid } from "@mui/material"
import { StyledField, CustomFlexbox, StyledButton } from "../components/UI/MUIStyledComponents"
import CustomSnackbar from "../components/UI/CustomSnackbar";
import FeedbackButton from "../components/Feed/FeedbackButton"
import AnimatedPage from "../components/Animation/AnimatedPage"

import { categories, SendIcon } from "../utils/constant"
import { feedbackSchema } from "../utils/validationSchema"
import { checkProfile } from "../utils/helperFunctions"


const NewFeedback = () => {

    const ref = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.user.userId)

    const [rate, setRate] = useState(null);
    const [type, setType] = useState(null)
    const [game, setGame] = useState(null)
    const [order, setOrder] = useState(null)
    const [method, setMethod] = useState(null)

    const [error, setError] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    const formik = useFormik({
        initialValues: {
            steamUser: location.state || "",
            description: "",
            amount: "",
        },
        validationSchema: feedbackSchema,
        onSubmit: (values) => {
            submitHandler(values)
        },
    });

    const submitHandler = async (data) => {

        const flag = await checkProfile(data.steamUser, userId)

        if (flag) {

            try {
                const feedbackDetails = { ...data, rate, type, game, order, method, userId }
                await axios.post(`https://repclone.herokuapp.com/api/feedback`, feedbackDetails, { withCredentials: true })
                setTimeout(() => {
                    navigate(`/ `)
                }, 1000)
                setSubmitted(true)
            } catch (e) {
                console.log(e.response.data.message);
            }

        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1000)
        }
    }

    return (
        <AnimatedPage>
            <Typography align="center" fontWeight={700} fontSize={21} ref={ref}>New Feedback</Typography>
            {error && <CustomSnackbar type="error" details="Profile not found" color="red" />}
            {submitted && <CustomSnackbar type="success" details="Feedback added" color="green" />}
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <Box display="flex" flexDirection="column" gap={3} mt="5%">

                    <Typography fontWeight={500} fontSize={18}>Steam user 64 ID</Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                        <CustomFlexbox bgcolor="#0e0f11" sx={{ width: { xs: "100%", lg: "50%" } }}>
                            <StyledField
                                variant="filled"
                                type="text"
                                size="small"
                                hiddenLabel
                                InputProps={{ disableUnderline: true }}
                                id="steamUser"
                                name="steamUser"
                                value={formik.values.steamUser}
                                error={formik.touched.steamUser && Boolean(formik.errors.steamUser)}
                                helperText={formik.touched.steamUser && formik.errors.steamUser}
                                FormHelperTextProps={{ style: { display: "flex", justifyContent: "right" } }}
                                onChange={formik.handleChange}
                            />
                        </CustomFlexbox>
                    </Box>


                    <Typography fontWeight={500} fontSize={18}>Description</Typography>
                    <CustomFlexbox width="100%" bgcolor="#0e0f11">
                        <StyledField
                            variant="filled"
                            InputProps={{ disableUnderline: true }}
                            id="description"
                            name="description"
                            value={formik.values.description}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            onChange={formik.handleChange}
                            size="small"
                            hiddenLabel
                            multiline
                            rows="10"
                        />
                    </CustomFlexbox>


                    <Grid container gap={2.5} mt="3%">
                        <Typography fontWeight={500} fontSize={18}>Rate: </Typography>
                        <Grid container gap={1}>
                            {categories.filter(category => category.type === "rate").map((category) => {
                                return (
                                    <Box onClick={() => setRate(category.name)} key={category.text}>
                                        <FeedbackButton data={category} selectedValue={rate} />
                                    </Box>
                                )
                            })}
                        </Grid>


                        <Typography fontWeight={500} fontSize={18}>Trade type: </Typography>
                        <Grid container gap={1}>
                            {categories.filter(category => category.type === "type").map((category) => {
                                return (
                                    <Box onClick={() => {
                                        setType(category.name);
                                        setGame(null);
                                    }}
                                        key={category.text}
                                    >
                                        <FeedbackButton data={category} selectedValue={type} />
                                    </Box>
                                )
                            })}
                        </Grid>


                        {(type === "Bought" || type === "Sold" || type === "Assisted trade of" || !type) &&
                            <>
                                <Typography fontWeight={500} fontSize={18}>Game: </Typography>
                                <Grid container gap={1}>
                                    {categories.filter(category => category.type === "game").map((category) => {
                                        return (
                                            <Box onClick={() => setGame(category.name)} key={category.text}>
                                                <FeedbackButton data={category} selectedValue={game} />
                                            </Box>
                                        )
                                    })}
                                </Grid>
                            </>
                        }


                        <Typography fontWeight={500} fontSize={18}>Trade order: </Typography>
                        <Grid container gap={1}>
                            {categories.filter(category => category.type === "order").map((category) => {
                                return (
                                    <Box onClick={() => setOrder(category.name)} key={category.text}>
                                        <FeedbackButton data={category} selectedValue={order} />
                                    </Box>
                                )
                            })}
                        </Grid >


                        <Typography fontWeight={500} fontSize={18}>Payment method: </Typography>
                        <Grid container gap={1.5} maxWidth="95%">
                            {categories.filter(category => category.type === "method").map((category) => {
                                return (
                                    <Box onClick={() => setMethod(category.name)} key={category.text}>
                                        <FeedbackButton data={category} selectedValue={method} />
                                    </Box>
                                )
                            })}
                        </Grid >

                    </Grid >


                    <Typography fontWeight={300} fontSize={17}>Trade value:</Typography>
                    <CustomFlexbox bgcolor="#0e0f11" sx={{ width: { xs: "50%", lg: "15%" } }}>
                        <StyledField
                            placeholder="$"
                            variant="filled"
                            type="number"
                            size="small"
                            hiddenLabel
                            InputProps={{ disableUnderline: true }}
                            id="amount"
                            name="amount"
                            value={formik.values.amount}
                            error={formik.touched.amount && Boolean(formik.errors.amount)}
                            helperText={formik.touched.amount && formik.errors.amount}
                            FormHelperTextProps={{ style: { display: "flex", justifyContent: "right" } }}
                            onChange={formik.handleChange}
                        />
                    </CustomFlexbox>


                    <StyledButton
                        variant="contained"
                        type="submit"
                        endIcon={<img src={SendIcon} alt="" />}
                        disabled={!rate || !type || (type === "Sold" && !game) || (type === "Bought" && !game) || (type === "Assisted trade of" && !game)
                            || !method || !order || submitted}
                        onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Send feedback
                    </StyledButton>

                </Box >
            </form>
        </AnimatedPage>
    )
}

export default NewFeedback