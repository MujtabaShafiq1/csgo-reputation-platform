import axios from "axios";

export const checkProfile = async (steamUser, userId) => {

    if (steamUser !== userId) {
        try {
            const response = await axios.get(`https://repclone.herokuapp.com/api/user/${steamUser}`)
            if (response.data[0]) return true;
            return false
        } catch (e) {
            console.clear();
            return false;
        }
    }
    return false;
}
