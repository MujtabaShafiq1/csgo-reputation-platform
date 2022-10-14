import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from "axios";
import { contactSchema } from '../utils/validationSchema';
import { SendIcon } from '../utils/constant';
import { Typography, Box, Select, MenuItem, Container } from "@mui/material"
import CustomSnackbar from '../components/UI/CustomSnackbar';
import { CustomFlexbox, StyledField, StyledButton } from "../components/UI/MUIStyledComponents"
import AnimatedPage from "../components/Animation/AnimatedPage"

const Contact = () => {

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false)
  const [reason, setReason] = useState("Ban appeal")

  const reasonHandler = (e) => {
    setReason(e.target.value)
  }

  const submitHandler = async (values) => {
    const data = { ...values, reason }
    await axios.post(`https://repclone.herokuapp.com/api/contact/`, data)
    setSubmitted(true)
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      submitHandler(values)
    },
  });


  return (
    <AnimatedPage>
      <Container sx={{ width: "90%" }}>
        {submitted && <CustomSnackbar type="success" details="Response Added" color="green" />}
        <Typography variant="h5" sx={{ mb: 8 }} fontWeight={700} align="center">CONTACT</Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="off">

          <Box display={{ xs: "block", lg: "flex" }} justifyContent="space-between" alignItems="center" gap={2}>

            <Box sx={{ width: { xs: "100%", lg: "47%" } }}>
              <Typography fontWeight={300} fontSize={17} margin="2% 0%">Reason</Typography>
              <CustomFlexbox bgcolor="#0e0f11">
                <Select
                  size="small"
                  value={reason}
                  onChange={reasonHandler}
                  sx={{ color: "white", border: "0.5px solid #252c35", width: "100%", margin: "1%", borderRadius: "0%", bgcolor: "#171819" }}
                  MenuProps={{ PaperProps: { sx: { bgcolor: "#171819" } } }}
                >
                  <MenuItem value="Ban appeal" >Ban appeal</MenuItem>
                  <MenuItem value="General" >General</MenuItem>
                  <MenuItem value="Suggestion" >Suggestion</MenuItem>
                  <MenuItem value="Business" >Business</MenuItem>
                  <MenuItem value="Other" >Other</MenuItem>
                </Select>

              </CustomFlexbox>
            </Box>

            <Box sx={{ width: { xs: "100%", lg: "47%" } }}>
              <Typography fontWeight={300} fontSize={17} margin="2% 0%">E-mail</Typography>
              <CustomFlexbox bgcolor="#0e0f11">
                <StyledField
                  placeholder='E-mail'
                  variant="filled"
                  type="email"
                  size="small"
                  hiddenLabel
                  InputProps={{ disableUnderline: true }}
                  id="email"
                  name="email"
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  FormHelperTextProps={{ style: { display: "flex", justifyContent: "right" } }}
                  onChange={formik.handleChange}
                />
              </CustomFlexbox>
            </Box>
          </Box>

          <Box>
            <Typography fontWeight={300} fontSize={17} margin="2% 0%">Title</Typography>
            <CustomFlexbox bgcolor="#0e0f11" sx={{ width: { xs: "100%", lg: "47%" } }}>
              <StyledField
                placeholder='Title'
                variant="filled"
                type="text"
                size="small"
                hiddenLabel
                InputProps={{ disableUnderline: true }}
                id="title"
                name="title"
                value={formik.values.title}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                FormHelperTextProps={{ style: { display: "flex", justifyContent: "right" } }}
                onChange={formik.handleChange}
              />
            </CustomFlexbox>
          </Box>

          <Box>
            <Typography fontWeight={300} fontSize={17} margin="2% 0%">Message:</Typography>
            <CustomFlexbox bgcolor="#0e0f11">
              <StyledField
                placeholder='Message'
                variant="filled"
                InputProps={{ disableUnderline: true }}
                id="message"
                name="message"
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                FormHelperTextProps={{ style: { display: "flex", justifyContent: "right" } }}
                onChange={formik.handleChange}
                size="small"
                hiddenLabel
                multiline
                rows="6"
              />
            </CustomFlexbox>
          </Box>


          <StyledButton sx={{ marginTop: "5%", width: "20%" }} variant="contained" type="submit" disabled={submitted} endIcon={<img src={SendIcon} alt="" />} >
            <Typography fontWeight={300} fontSize="13px"> Send feedback</Typography>
          </StyledButton>

        </form>
      </Container>
    </AnimatedPage>
  )
}

export default Contact