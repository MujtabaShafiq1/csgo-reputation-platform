import { Typography, Box, Divider, Container } from '@mui/material'
import { CustomFlexbox } from "../UI/MUIStyledComponents"
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <Container>
        <Divider sx={{ bgcolor: "gray", mt: "5%", opacity: 0.4 }} />
        <Box sx={{
          display: "flex", padding: "35px 0px",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" }
        }}>
          <CustomFlexbox>
            <Typography color="gray" mr={2} fontSize="15px">v1.12</Typography>
            <Typography fontSize="14px">CSGOrep 2020. Powered by Steam. Not affiliated with Valve Corp.</Typography>
          </CustomFlexbox>
          <CustomFlexbox sx={{ display: "flex" , marginTop: {xs: "5%" , sm: "0%" , md: "0%" , lg: "0%"} }}>
            <TwitterIcon sx={{ fill: "lightblue"}} />
            <Typography ml={1} color="gray">@CSGORepCom</Typography>
          </CustomFlexbox>
        </Box>
      </Container>
    </>
  )
}

export default Footer