const initialState = { 
    meal: [], 
}; 

const catalogueReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'FETCH_CATALOGUE': 
        return { 
            ...state, 
            meal: action.payload, 
        }; 
        default: return state; 
    } 
}; 

export default catalogueReducer; 