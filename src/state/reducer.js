const initialState = {
    progressData: [
        {id: 1, label: "Wash the dishes", status: "in progress"},
        {id: 2, label: "Wash the dishes", status: "in progress"},
        {id: 3, label: "Wash the dishes", status: "in progress"}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'TEST':
            console.log(action.payload);
        default:
            return initialState;
    }
}

export default reducer;