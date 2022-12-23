const initialState = {
    getAllCountriesData: [],
    getCountry: [],
}


function rootReducer(state = initialState  , action) {
   switch (action.type) {
    case 'GET-All-COUNTRIES':
        return {
           ...state,
           getAllCountriesData: action.payload
        }
    case 'GET-COUNTRY-NAME':
        return {
          ...state,
          getAllCountriesData: action.payload
        }
    case 'GET-COUNTRY-BY-ID':
        return {
         ...state,
          getCountry: action.payload
        }
    default:
        return {
            ...state
        }
   }
};

export default rootReducer;