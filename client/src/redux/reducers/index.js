const initialState = {
    getAllCountriesData: [],
    countriesSearch: [],
    getCountry: [],
}


function rootReducer(state = initialState  , action) {
   switch (action.type) {
    case 'GET-All-COUNTRIES':
        return {
           ...state,
           getAllCountriesData: action.payload,
           countriesSearch: []
        }
    case 'GET-COUNTRY-NAME':
        let data = state.getAllCountriesData.filter(e=>e.nombre.toLowerCase().includes(action.payload.toLowerCase()))
        return {
          ...state,
          countriesSearch:  data.length? data : {message:'Pais no Encontrado'}
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