import { useState } from "react";
import { Snackbar, Alert } from "@mui/material"

const CustomSnackbar = ({ type, details, color }) => {

    const [snackbar, setSnackbar] = useState(true)
    return (
        <Snackbar
            open={snackbar}
            autoHideDuration={1000}
            onClose={() => { setSnackbar(false) }}
            sx={{
                width: '100%',
                height: "27%",
                zIndex: 2,
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={type} sx={{ backgroundColor: color }}>{details}</Alert>
        </Snackbar>
    )
}

export default CustomSnackbar;