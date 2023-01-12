const initialState = {
    getAllCountriesData: [],
    countriesSearch: [],
    getCountry: [],
    pages:1,
    textSearch: undefined,
    nameFilter: "nombre",
    typeFilter: "asc",
}


function rootReducer(state = initialState  , action) {
   switch (action.type) {
    case 'GET-All-COUNTRIES':
        return {
           ...state,
           getAllCountriesData: action.payload,
           countriesSearch: [],
           nameFilter: "nombre",
           typeFilter: "asc"
        }
    case 'GET-ORDER-COUNTRIES':
        return {
            ...state,
           getAllCountriesData: action.payload,
           nameFilter: action.data.name,
           typeFilter: action.data.type
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
    case 'PAGE-NUMBER':
        return {
            ...state,
            pages: action.payload
        }
    case 'TEXT-SEARCH': 
        return{
            ...state,
            textSearch: action.payload

        }
    default:
        return {
            ...state
        }
   }
};

export default rootReducer;