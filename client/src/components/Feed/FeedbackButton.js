import { Box, Typography } from "@mui/material"
import { IconBox} from "../UI/MUIStyledComponents"

const FeedbackButton = ({ data, selectedValue }) => {

    return (
        <IconBox style={{background: data.name === selectedValue && "rgba(4, 59, 92, 0.6)"}}>
            <Box src={data.icon} alt="" component="img" height="auto" width={25}/>
            <Typography fontWeight={300} fontSize={18}>{data.text}</Typography>
        </IconBox>
    )
}

export default FeedbackButton