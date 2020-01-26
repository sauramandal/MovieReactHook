export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
    activePage: 10,
    searchQuery: 'harry potter',
}

export const reducer = (state, action) => {
    const { payload, error } = action
    console.log('payload', payload, error)
    switch (action.type) {
        case 'SEARCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                errorMessage: null,
                searchQuery: payload,
            }
        case 'SEARCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: payload,
            }
        case 'SEARCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                errorMessage: error,
            }
        case 'FILTER_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                movies: payload,
            }
        case 'FILTER_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                errorMessage: error,
            }
        default:
            return state
    }
}
