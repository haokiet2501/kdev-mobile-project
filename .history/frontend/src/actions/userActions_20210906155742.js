import { USER_LOGIN_REQUEST } from "../contants/userContants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            
        }
    } catch (error) {
        
    }
}