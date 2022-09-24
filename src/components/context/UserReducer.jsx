const UserReducer = (state,action)=>{
    switch (action.type) {
        case "USERS":
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case "USER_DATA":
            return {
                ...state,
                profile:action.payload.profile,
                repos:action.payload.repos,
                loading:false
            }

        case "CLEAR":
            return {
                ...state,
                users:[],
                loading:false
            }
        case "LOADING":
            return {
                ...state,
                loading:true
            }
    
        default:
            return state
    }
}

export default UserReducer