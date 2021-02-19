export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


// asynchronous action that returns a fetch and uses dispatch
export const login = creds => {
    console.log("creds are", creds)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(res => res.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
            .catch(console.log)
    }
}