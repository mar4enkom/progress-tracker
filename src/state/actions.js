export const test = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'TEST',
            payload
        });
    };
}

export const add_item = (payload) => {
    return (dispatch) => {
        dispatch({
           type: "ADD_ITEM",
           payload
        });
    }
}
