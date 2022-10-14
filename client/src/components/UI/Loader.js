import { Box } from "@mui/material"
import LoaderImage from "../../assests/loader.png"
import { CustomFlexbox } from "./MUIStyledComponents";

const Loader = () => {
    return (
        <CustomFlexbox mt={5}>
            <Box
                component="img"
                src={LoaderImage}
                sx={{
                    animation: "spin 2s linear infinite",
                    height: "auto",
                    width: "15%",
                    "@keyframes spin": {
                        "0%": {
                            transform: "rotate(360deg)"
                        },
                        "100%": {
                            transform: "rotate(0deg)"
                        }
                    },
                }}
            />
        </CustomFlexbox>
    )
}

export default Loader;