import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    navigate(`/user/${user.userId}`)
  }, [navigate,user.userId])
  

  return (
    <>
        Profile    
    </>
  )
}

export default Profile