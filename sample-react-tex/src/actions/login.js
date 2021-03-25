import firebase from '../firebase/index';

export const inputEmail = tmpEmail => (
    {
        type:'INPUT_EMAIL',
        payload : {
            tmpEmail
        }
    }
)
export const inputPassword = tmpPassword => (
    {
        type:'INPUT_PASSWORD',
        payload : {
            tmpPassword
        }
    }
)

export const setLoginStatus = loginStatus => (
    {
        type:'SET_LOGIN_STATUS',
        payload : {
            loginStatus:loginStatus
        }
    }
)


export const signupWithEmail = () => {
    return (dispatch,getState) => {
        const tmpEmail = getState().default.tmpEmail
        const tmpPassword = getState().default.tmpPassword

        console.log(tmpEmail)
        console.log(tmpPassword)

        firebase.auth().createUserWithEmailAndPassword(tmpEmail, tmpPassword)
        .then(res => {
            dispatch(setLoginStatus(true))
            console.log(res)
        })
        .catch(error => {
            console.log(error)
            dispatch(setLoginStatus(false))
        });

    }
}