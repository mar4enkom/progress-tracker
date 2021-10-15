export const test = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'TEST',
            payload
        });
    };
}
