import {GET_SINGLE_NEWS, SINGLE_NEWS_ERROR} from '../types'

const initialState = {
    singleNews:[],
    loading:true
}

export default function reduce(state = initialState, action){

    switch(action.type){

        case GET_SINGLE_NEWS:
            return{
                ...state,
                singleNews: action.payload,
                loading: false
            }
        case SINGLE_NEWS_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

};