import { useState } from "react"
import { Box, Typography, Select, MenuItem } from '@mui/material'
import { searchFilters, sortFilers } from '../../utils/constant'
import { useDispatch, useSelector } from "react-redux"
import { searchActions } from "../../store/searchSlice"
import { CustomFlexbox, StyledResponsiveBox } from "../UI/MUIStyledComponents"

const Feedbar = () => {

    const dispatch = useDispatch();
    const selectedFilter = useSelector((state) => state.search.filter)
    const selectedSorting = useSelector((state) => state.search.sorting)

    const [sorting, setSorting] = useState(selectedSorting.index || 0)

    const filterChangeHandler = (data) => {
        const { value, type, text } = data;
        dispatch(searchActions.onLoadFilter({ value, type, text }))
    }

    const sortChangeHandler = (e) => {
        setSorting(e.target.value)
        dispatch(searchActions.onLoadSorting(sortFilers[e.target.value]))
    }

    return (

        <StyledResponsiveBox>

            <Typography fontSize="20px" fontWeight={500} mt={4}>Transaction history: </Typography>

            <CustomFlexbox gap={4} mt={4}>
                <Typography fontSize="18px" fontWeight={300}>Filter:</Typography>
                <CustomFlexbox gap={1}>
                    {searchFilters.map((c) => {
                        return (
                            <Box
                                bgcolor={selectedFilter.value === c.value ? "gray" : "#161718"}
                                padding="5px 5px 0px 5px"
                                border="2px solid rgba(189, 195, 199, 0.35)"
                                borderRadius="10px"
                                key={c.icon}
                                sx={{ cursor: "pointer" }}
                                onClick={() => { filterChangeHandler(c) }}
                            >
                                <img src={c.icon} alt="" style={{ width: 22, height: "auto" }} />
                            </Box>
                        )
                    })}
                </CustomFlexbox>
            </CustomFlexbox>

            <CustomFlexbox gap={2} mt={4}>
                <Typography fontSize="18px" fontWeight={300}>Sort by:</Typography>
                <CustomFlexbox gap={1}>
                    <Select
                        size="small"
                        value={sorting}
                        onChange={sortChangeHandler}
                        default="date ascending"
                        sx={{ bgcolor: "#171819", color: "white" }}
                        MenuProps={{ PaperProps: { sx: { bgcolor: "#171819" } } }}
                    >
                        {sortFilers.map((c, index) => <MenuItem value={index} key={c.value}>{c.value}</MenuItem>)}
                    </Select>
                </CustomFlexbox>
            </CustomFlexbox>
        </StyledResponsiveBox>

    )
}

export default Feedbar