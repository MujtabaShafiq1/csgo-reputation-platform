import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { CustomFlexbox } from '../UI/MUIStyledComponents';
import CustomSnackbar from '../UI/CustomSnackbar';
import SadIcon from "../../assests/icons/sad_face.png"
import Feedbar from './Feedbar';
import Rep from './Rep';
import axios from 'axios';

const Feed = ({ feedbacks }) => {

    const [data, setData] = useState(feedbacks)
    const [deleted, setDeleted] = useState(false)
    const filter = useSelector(state => state.search.filter)

    useEffect(() => {
        if (filter.value) {
            const filteredFeedbacks = data.filter(c => (filter.text.includes(c.method) || filter.text.includes(c.type))).map(feedback => { return feedback })
            setData(filteredFeedbacks);
        } else {
            setData(feedbacks)
        }
        // eslint-disable-next-line 
    }, [filter])

    const deleteHandler = async (id) => {
        try {

            await axios.delete(`https://repclone.herokuapp.com/api/feedback/${id}`, { withCredentials: true })
            const filteredFeedback = data.filter((feedback) => {
                return feedback._id !== id
            })
            setData(filteredFeedback);
            setDeleted(true)
            setTimeout(() => {
                setDeleted(false)
            }, 1000)

        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <>
            <Feedbar />
            {data.length === 0 ?
                <>
                    <CustomFlexbox sx={{ gap: 3, marginTop: "10%" }}>
                        <img src={SadIcon} alt="" style={{ width: 75, height: 75 }} />
                        <Typography variant="h4" align="center" >No records found</Typography>
                    </CustomFlexbox>
                </>
                :
                <>
                    {deleted && <CustomSnackbar type="success" details="Feedback Deleted Successfully" color="green" />}
                    {data.map((feedback) => <Rep feedback={feedback} key={feedback._id} deleteHandler={deleteHandler} />)}

                </>
            }

        </>
    )
}

export default Feed