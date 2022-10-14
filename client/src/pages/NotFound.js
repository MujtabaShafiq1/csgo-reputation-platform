import { Typography } from "@mui/material"
import { CustomFlexbox } from "../components/UI/MUIStyledComponents"
import AnimatedPage from "../components/Animation/AnimatedPage"

const NotFound = () => {
    return (
        <AnimatedPage>
            <CustomFlexbox style={{ minHeight: '50vh' }}>
                <Typography variant="h3">404 Page not found</Typography>
            </CustomFlexbox>
        </AnimatedPage>
    )
}

export default NotFound