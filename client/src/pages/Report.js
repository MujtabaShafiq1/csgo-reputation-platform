import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { SendIcon } from "../utils/constant";
import { reportSchema } from "../utils/validationSchema";
import { Typography, Container } from "@mui/material";
import { CustomFlexbox, StyledField, StyledButton } from "../components/UI/MUIStyledComponents";
import CustomSnackbar from "../components/UI/CustomSnackbar"
import AnimatedPage from "../components/Animation/AnimatedPage"
import axios from "axios"

const Report = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false)
  const userId = useSelector((state) => state.user.user.userId)

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: reportSchema,
    onSubmit: (values) => {
      submitHandler(values)
    },
  });

  const submitHandler = async (value) => {

    try {
      const data = { ...value, userId, reportedUser: location.state, }
      await axios.post(`https://repclone.herokuapp.com/api/report`, data, { withCredentials: true })
      setTimeout(() => {
        navigate("/")
      }, 1000)
      setSubmitted(true)

    } catch (e) {
      console.log(e.response.data.message)
    }
  }

  return (
    <AnimatedPage>

      {submitted && <CustomSnackbar type="success" details="Report Submitted" color="green" />}


      <Container maxWidth="sm" sx={{ marginTop: "10%" }}>
        <form onSubmit={formik.handleSubmit} autoComplete="off">

          <Typography fontSize="15px" sx={{ mb: 3 }} fontWeight={300}>
            We need your mail so we can contact you later about anything related to your feedbacks or reports. Your address will not be visible to other users.
          </Typography>


          <CustomFlexbox width="100%" bgcolor="#0e0f11">
            <StyledField
              placeholder='E-mail'
              variant="filled"
              type="email"
              size="small"
              hiddenLabel
              id="email"
              name="email"
              InputProps={{ disableUnderline: true }}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              onChange={formik.handleChange}
            />
          </CustomFlexbox>

          <StyledButton
            sx={{ marginTop: "8%", width: "20%" }}
            variant="contained"
            type="submit"
            endIcon={<img src={SendIcon} alt="" />}
            disabled={submitted}
          >
            Save
          </StyledButton>

        </form>

      </Container>

    </AnimatedPage >
  )
}

export default Report