import {GET_NEWS, NEWS_ERROR} from '../types'

const initialState = {
    news:[],
    categoryNews: [],
    loading:true
}


export default function reduce(state = initialState, action){

    switch(action.type){

        case GET_NEWS:
        return {
            ...state,
            news:action.payload,
            loading:false
        }
        case NEWS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

};