const loginReducer = (state = false, action) => {
    switch(action.type) {
        case 'Logged_in':
            return true
        case 'Logged_out':
            return false
        default:
            return false;
    }
}

export default loginReducer;