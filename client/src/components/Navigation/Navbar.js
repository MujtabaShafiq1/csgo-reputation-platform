import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

import { StyledToolbar, StyledAvatar, StyledLink, CustomFlexbox } from "../UI/MUIStyledComponents"
import LoginIcon from "../../assests/login.png"
import { LogoIcon, CrossIcon } from '../../utils/constant';
import { AppBar, Typography, Box, SwipeableDrawer } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';


const styles = {
  activeNav: {
    textDecoration: "none",
    backgroundColor: "#293140",
    borderRadius: "8px",
  },
  default: {
    textDecoration: "none",
  }
}

const Navbar = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const user = useSelector((state) => state.user.user)
  const status = useSelector((state) => state.user.status)

  const logoutHandler = async () => {
    window.open(`https://repclone.herokuapp.com/api/auth/logout`, "_self");
  }

  const steam = () => {
    window.open(`https://repclone.herokuapp.com/api/auth/steam`, "_self");
  };

  return (
    <AppBar position='sticky' sx={{ flexGrow: 1 }}>

      <StyledToolbar>

        <NavLink to='/' style={styles.default}>
          <Box component="img" src={LogoIcon}
            sx={{
              width: { xs: "60%", sm: "40%", md: "40%", lg: 200, }, height: "auto",
              "&:hover": { cursor: "pointer", transform: "scale(1.2,1.2)", transition: "0.5s transform" }
            }}
          />
        </NavLink>

        <CustomFlexbox sx={{ gap: 2 }}>
          <CustomFlexbox sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: "space-between", gap: 2 }}>

            <NavLink to='/' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
              <StyledLink>Browse</StyledLink>
            </NavLink>
            {status &&
              <NavLink to='/profile' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
                <StyledLink>Profile</StyledLink>
              </NavLink>}

            {status &&
              <NavLink to='/report' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
                <StyledLink>Report</StyledLink>
              </NavLink>}

            <NavLink to='/faq' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
              <StyledLink>FAQ</StyledLink>
            </NavLink>

            <NavLink to='/contact' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
              <StyledLink>Contact</StyledLink>
            </NavLink>

            {status &&
              <NavLink to='/feedback' style={({ isActive }) => isActive ? styles.activeNav : styles.default}>
                <StyledLink sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "lightgreen" }, }}>
                  New Feedback
                </StyledLink>
              </NavLink>
            }

          </CustomFlexbox>

          <CustomFlexbox gap={2}>
            {status ?
              <>
                <StyledAvatar src={user.img} onClick={() => navigate(`/user/${user.userId}`)} />
                <CustomFlexbox flexDirection="column">
                  <Typography fontSize="18px">{user.name}</Typography>
                  <Typography fontSize="14px" onClick={logoutHandler} color="primary" sx={{ "&:hover": { cursor: "pointer" } }}>logout</Typography>
                </CustomFlexbox>
              </>
              :
              <>
                <Box component="img" src={LoginIcon} sx={{ width: { xs: "90%" }, cursor: "pointer" }} onClick={steam} />
              </>
            }
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, paddingRight: "10px" }}>
              <MenuIcon onClick={() => setOpen(true)} width={50} />
            </Box>
          </CustomFlexbox>

        </CustomFlexbox>

        <SwipeableDrawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          anchor="right"
          PaperProps={{
            sx: {
              backgroundColor: "#000000",
              width: { xs: "100%", sm: "50%", md: "40%" },
              display: { lg: "none" }
            }
          }}
        >
          <Box>

            <CustomFlexbox sx={{ justifyContent: (status ? "space-around" : "flex-end"), margin: "10% 10% 0% 0%" }}>

              {status &&
                <CustomFlexbox gap={2}>
                  <StyledAvatar src={user.img} onClick={() => {
                    setOpen(false)
                    navigate(`/user/${user.userId}`)
                  }} />
                  <CustomFlexbox flexDirection="column">
                    <Typography fontSize="18px">{user.name}</Typography>
                    <Typography fontSize="14px" onClick={logoutHandler} color="primary" sx={{ "&:hover": { cursor: "pointer" } }}>logout</Typography>
                  </CustomFlexbox>
                </CustomFlexbox>
              }

              <CustomFlexbox>
                <Box component="img" src={CrossIcon} onClick={(e) => setOpen(false)} />
              </CustomFlexbox>

            </CustomFlexbox>

            <CustomFlexbox flexDirection="column" gap={2} style={{ minHeight: "70vh" }}>

              <NavLink to='/' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)} >
                <StyledLink>Browse</StyledLink>
              </NavLink>

              {status &&
                <NavLink to='/profile' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)}>
                  <StyledLink >Profile</StyledLink>
                </NavLink>}

              {status &&
                <NavLink to='/report' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)}>
                  <StyledLink>Report</StyledLink>
                </NavLink>}

              <NavLink to='/faq' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)}>
                <StyledLink>FAQ</StyledLink>
              </NavLink>

              <NavLink to='/contact' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)}>
                <StyledLink>Contact</StyledLink>
              </NavLink>

              {status &&
                <NavLink to='/feedback' style={({ isActive }) => isActive ? styles.activeNav : styles.default} onClick={(e) => setOpen(false)}>
                  <StyledLink sx={{ backgroundColor: "green", "&:hover": { backgroundColor: "lightgreen" }, }}>
                    New Feedback
                  </StyledLink>
                </NavLink>
              }

              {!status && <Box component="img" src={LoginIcon} sx={{ width: { xs: "40%" }, cursor: "pointer" }} onClick={steam} />}

            </CustomFlexbox>
          </Box>

        </SwipeableDrawer>

      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar