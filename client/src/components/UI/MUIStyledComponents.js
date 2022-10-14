import { Box, TextField, Button, Avatar, IconButton, Toolbar, Typography, styled } from "@mui/material"

const CustomFlexbox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const StyledRateBox = styled(Avatar)(({ rate }) => ({
  width: 45,
  height: 45,
  backgroundColor: (rate === "Positive") ? "green" : "orange",
}))

const StyledResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: "inline-block",
  },
  [theme.breakpoints.up('lg')]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))

const StyledStatsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1f2227",
  gap: "20px",
  borderRadius: "20px",
  padding: "20px 10px",
  [theme.breakpoints.down('sm')]: {
    width: "80%",
    fontSize: "16px",
  },
  [theme.breakpoints.up('sm')]: {
    width: "25%",
  },
}))

const StyledIconButton = styled(IconButton)({
  padding: 0,
  zIndex: 1,
  marginLeft: "-5%",
  ":hover": {
    cursor: "pointer",
    transform: "scale(1.2,1.2)",
    transition: "0.5s transform",
  },
})

const AvatarContainer = styled(Avatar)(({ theme }) => ({
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "#1f2227",
  marginLeft: "-6%",
  width: 120,
  height: 120,
  [theme.breakpoints.down('sm')]: {
    display: "none",
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
  },
}))

const ResponsiveAvatarContainer = styled(Avatar)(({ theme }) => ({
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginBottom: "-10%",
  backgroundColor: "#1f2227",
  width: 100,
  height: 100,
  display: "flex",
}))


const StyledFeedAvatar = styled(Avatar)(({ rate }) => ({
  width: 100,
  height: 100,
  border: (rate === "Positive") ? "4px solid green" : "4px solid orange",
  "&:hover": {
    cursor: 'pointer',
    opacity: 0.65,
  },
}))



const StyledUserAvatar = styled(Avatar)({
  backgroundColor: "#171819",
  width: 70,
  height: 70,
  fontSize: "24px",
  textTransform: "none",
})


const StyledField = styled(TextField)(({ error }) => ({
  backgroundColor: "#171819",
  width: "98%",
  margin: "1%",
  input: {
    color: 'white',
    '&[type=number]': {
      'MozAppearance': 'textfield',
    },
    '&::-webkit-outer-spin-button': {
      'WebkitAppearance': 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      'WebkitAppearance': 'none',
      margin: 0,
    },
  },
  textarea: { color: 'white' },
  border: error ? "0.5px solid red" : "0.5px solid #252c35",
}))


const StyledButton = styled(Button)(({ theme }) => ({
  gap: "12px",
  padding: "12px 8px",
  width: "18%",
  color: "white",
  backgroundColor: '#0096FF',
  textTransform: "none",
  "&:disabled": {
    backgroundColor: 'gray',
    color: "white",
  },
  "&:hover": {
    backgroundColor: "lightblue"
  },
  [theme.breakpoints.only('md')]: {
    width: "35%",
  },
  [theme.breakpoints.down('md')]: {
    width: "50%",
  },
}))


const IconBox = styled(Box)({
  backgroundColor: "#1f2227",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 18px",
  gap: "12px",
  textTransform: "none",
  cursor: "pointer",
  border: "3px solid #293140",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "rgba(189, 195, 199, 0.2)",
  },
})

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "rgb(25,28,32)",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
})


const StyledAvatar = styled(Avatar)({
  border: "7px solid #20252e",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.2,1.2)",
    transition: "0.5s transform",
  }
})

const StyledLink = styled(Typography)({
  borderRadius: "8px",
  padding: "8px 20px",
  color: "white",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "skyblue",
    cursor: "pointer"
  },
  textTransform: "none",
})

export {
  CustomFlexbox,
  StyledResponsiveBox,
  ResponsiveAvatarContainer,
  IconBox,
  StyledField,
  StyledButton,
  StyledUserAvatar,
  AvatarContainer,
  StyledFeedAvatar,
  StyledRateBox,
  StyledIconButton,
  StyledToolbar,
  StyledAvatar,
  StyledLink,
  StyledStatsBox,
}