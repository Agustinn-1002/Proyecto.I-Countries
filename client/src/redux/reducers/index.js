const initialState = {
    getAllCountriesData: [],
    getAllCountriesDataRespaldo: [],
    countriesSearch: [],
    countriesSearchRespaldo: [],
    getCountry: [],
    pages:1,
    textSearch: undefined,
    nameFilter: "nombre",
    typeFilter: "asc",
    allContinentReset: false,
}


function rootReducer(state = initialState  , action) {
   switch (action.type) {
    case 'GET-All-COUNTRIES':
        return {
           ...state,
           getAllCountriesData: action.payload,
           getAllCountriesDataRespaldo:action.payload,
           countriesSearch: [],
           countriesSearchRespaldo: [],
           textSearch: undefined,
           nameFilter: "nombre",
           typeFilter: "asc",
           allContinentReset: false
        }
    case 'GET-ORDER-COUNTRIES':
        let apidata = action.payload;
        let datos;
        if (state.countriesSearch.length > 0) {
            datos = apidata.filter(e=>e.nombre.toLowerCase().includes(state.textSearch.toLowerCase()))
            return{
                ...state,
                countriesSearch: datos,
                nameFilter: action.data.name,
                typeFilter: action.data.type
            }
        }
        return {
            ...state,
            getAllCountriesData: apidata,
            countriesSearch:[],
            nameFilter: action.data.name,
            typeFilter: action.data.type
        }  
    case 'ORDER-BY-CONTINENT':
        if(action.payload === null || action.payload === 'All'){
            if (state.countriesSearch.length > 0) {
                return{
                    ...state,
                    pages: 1,
                    countriesSearch: state.countriesSearchRespaldo,
                }
            }
            return{
                ...state,
                pages: 1,
                getAllCountriesData: state.getAllCountriesDataRespaldo,
                countriesSearch:[],
                countriesSearchRespaldo: [],
            }
        }
        if (state.countriesSearch.length > 0) {
            let data = state.countriesSearchRespaldo.filter(e=>e.continente.toLowerCase() === action.payload.toLowerCase())
            return{
                ...state,
                pages: 1,
                countriesSearch: data,
                allContinentReset: true
            }
        }else{
        return{
            ...state,
            pages: 1,
            allContinentReset: true,
            getAllCountriesData: state.getAllCountriesDataRespaldo.filter(e=>e.continente.toLowerCase() === action.payload.toLowerCase())
        }}
    case 'GET-COUNTRY-NAME':
        let data = state.getAllCountriesData.filter(e=>e.nombre.toLowerCase().includes(action.payload.toLowerCase()))
        return {
          ...state,
          countriesSearch:  data.length? data : {message:'Pais no Encontrado'},
          countriesSearchRespaldo: data.length? data : {message:'Pais no Encontrado'},
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