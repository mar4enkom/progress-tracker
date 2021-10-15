const initialState = {
    progressData: [
        {id: 1, title: "Wash the dishes1", description: "Lorem ipsum", status: "todo"},
        {id: 2, title: "Wash the dishes2", description: "Lorem ipsum", status: "progress"},
        {id: 3, title: "Wash the dishes3", description: "Lorem ipsum", status: "done"}
    ],
    currentId: 4
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_ITEM': {
            const {title, description} = action.payload;
            return {
                ...state,
                currentId: state.currentId + 1,
                progressData: [
                    ...state.progressData,
                    {id: state.currentId, title, description, status: "todo"}
                ]
            }
            break;
        }
        default:
            return initialState;
    }
}

export default reducer;