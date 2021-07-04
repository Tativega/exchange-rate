export const loginReducer = (state, action) => {
    switch (action.type) {
        case "email":
            return { ...state, email: action.value };
        case "password":
            return { ...state, password: action.value };
        default:
            return ""
    }
}

export const registerReducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.value };
        case "email":
            return { ...state, email: action.value };
        case "password":
            return { ...state, password: action.value };
        case "confirmpassword":
            return { ...state, confirmpassword: action.value };
        default:
            return ""
    }
}