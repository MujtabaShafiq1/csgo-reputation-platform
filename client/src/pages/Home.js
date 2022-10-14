import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { Divider } from '@mui/material';
import Feed from "../components/Feed/Feed"
import Search from "../components/Search/Search"
import Loader from '../components/UI/Loader';
import AnimatedPage from "../components/Animation/AnimatedPage"
import { CustomFlexbox, StyledButton } from '../components/UI/MUIStyledComponents';
import { searchActions } from '../store/searchSlice';

const Home = () => {

    const dispatch = useDispatch();
    const sorting = useSelector(state => state.search.sorting)
    const filter = useSelector((state) => state.search.filter)

    const [loading, setLoading] = useState(null)
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(4)
    const [maxFeedback, setMaxFeedback] = useState(0)
    const [feedbacks, setFeedbacks] = useState([])

    const fetchFeedbacks = useCallback(async () => {
        setLoading(true)
        const response = await axios.get(`https://repclone.herokuapp.com/api/feedback?text=${sorting.text}&type=${sorting.type}&skip=${skip}&limit=${limit}`)
        const feedbackCount = await axios.get(`https://repclone.herokuapp.com/api/feedback/total`)
        setFeedbacks([...feedbacks, ...response.data]);
        setMaxFeedback(feedbackCount.data)
        setLoading(false)
        // eslint-disable-next-line
    }, [skip, limit])

    const fetchSortedFeedbacks = useCallback(async () => {
        setLoading(true)
        const response = await axios.get(`https://repclone.herokuapp.com/api/feedback?text=${sorting.text}&type=${sorting.type}&skip=${0}&limit=${limit}`)
        const feedbackCount = await axios.get(`https://repclone.herokuapp.com/api/feedback/total`)
        setMaxFeedback(feedbackCount.data)
        setFeedbacks(response.data);
        setLoading(false)
        // eslint-disable-next-line
    }, [sorting, filter])

    useEffect(() => {
        fetchFeedbacks();
        dispatch(searchActions.reset())
    }, [dispatch, fetchFeedbacks])

    useEffect(() => {
        fetchSortedFeedbacks();
    }, [fetchSortedFeedbacks])

    const increaseHandler = () => {
        setSkip((state) => (state + 4))
        setLimit((state) => (state + 4))
    }

    return (
        <AnimatedPage>
            <Search />
            {loading ?
                <Loader /> :
                <>
                    <Divider sx={{ bgcolor: "gray", mt: "1%", mb: "5%", opacity: 0.4 }} />
                    <Feed feedbacks={feedbacks} />

                    {feedbacks.length !== maxFeedback &&
                        <>
                            <Divider sx={{ bgcolor: "gray", mt: "10%", mb: "2%", opacity: 0.4 }} />
                            <CustomFlexbox>
                                <StyledButton sx={{ width: "12%", }} onClick={increaseHandler}>
                                    Load more
                                </StyledButton>
                            </CustomFlexbox>
                        </>
                    }
                </>
            }
        </AnimatedPage>
    )
}

export default Home