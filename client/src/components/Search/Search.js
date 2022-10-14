import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { searchSchema } from "../../utils/validationSchema"
import { checkProfile } from "../../utils/helperFunctions"
import CustomSnackbar from "../UI/CustomSnackbar";

import SearchIcon from '@mui/icons-material/Search';
import ReplyIcon from '@mui/icons-material/Reply';
import { CustomFlexbox, StyledField, StyledIconButton } from "../UI/MUIStyledComponents";
import { Typography, Box } from '@mui/material';


const Search = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false)

    const searchHandler = async (data) => {
        const flag = await checkProfile(data.steamUser, "")
        if (flag) {
            navigate(`/user/${data.steamUser}`)
            setError(false)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1000)
        }
    }

    const formik = useFormik({
        initialValues: {
            steamUser: "",
        },
        validationSchema: searchSchema,
        onSubmit: (values) => {
            searchHandler(values)
        },
    });

    return (
        <>
            {error && <CustomSnackbar type="error" details="Profile not found" color="red" />}
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }} autoComplete="off">

                <CustomFlexbox flexDirection="column" >
                    <Typography variant="h5" sx={{ mb: 3 }} fontWeight={700}>Search user</Typography>
                    <CustomFlexbox sx={{ width: "100%" }} >
                        <CustomFlexbox sx={{ width: { lg: "60%", md: "70%", sm: "80%", xs: "100%" } }} bgcolor="#0e0f11">
                            <StyledField
                                variant="filled"
                                placeholder="SteamID64"
                                id="steamUser"
                                name="steamUser"
                                value={formik.values.steamUser}
                                error={formik.touched.steamUser && Boolean(formik.errors.steamUser)}
                                onChange={formik.handleChange}
                                InputProps={{ disableUnderline: true }}
                                size="small"
                                hiddenLabel
                            />
                        </CustomFlexbox>
                        <StyledIconButton type="submit">
                            <SearchIcon sx={{ fontSize: "220%", rotate: "90deg" }} />
                        </StyledIconButton>
                    </CustomFlexbox>


                    <Box display="flex" mt={3}>
                        <Typography fontSize={15} fontWeight={300} sx={{ mb: 5, mr: 2 }}>Enter SteamID64 here</Typography>
                        <ReplyIcon sx={{ fontSize: "23px", rotate: "100deg" }} />
                    </Box>
                </CustomFlexbox >
            </form>
        </>
    )
}

export default Search