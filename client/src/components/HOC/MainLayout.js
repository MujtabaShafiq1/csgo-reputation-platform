import { Container, ThemeProvider } from '@mui/material'
import Navbar from "../Navigation/Navbar"
import Footer from "../Navigation/Footer"
import Stats from "../Navigation/Stats"
import ScrollToTop from "../../utils/ScrollToTop"
import theme from "../../theme/theme"

const NavigationLayout = (props) => {
  return (

    <ThemeProvider theme={theme}>
      <ScrollToTop>
        <Navbar />
        <Container sx={{ mt: 4, maxWidth: "md" }} style={{ minHeight: "40vh" }}>
          {props.children}
        </Container>
        <Stats />
        <Footer />
      </ScrollToTop>
    </ThemeProvider>
  )
}

export default NavigationLayout