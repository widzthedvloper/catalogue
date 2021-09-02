
const initialState = {
  catalogue: [],
  status: 'idle',
};

const catalogueReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case 'FETCH_CATALOGUE': 
        return  {
            ...state,
            catalogue: action.payload
        };
        default: 
        return state; 
    } 
}; 

export default catalogueReducer; 