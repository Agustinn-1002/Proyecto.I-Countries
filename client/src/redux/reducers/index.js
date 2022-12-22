const initialState = {
    getCountriesData: []
}


function rootReducer(state = initialState  , action) {
   switch (action.type) {
    case 'GET-COUNTRY':
        return {
           ...state,
           getCountriesData: action.payload
        }
    default:
        return {
            ...state
        }
   }
};

export default rootReducer;