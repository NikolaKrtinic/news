import {GET_NEWS, NEWS_ERROR, GET_SINGLE_NEWS, SINGLE_NEWS_ERROR} from '../types';
import axios from 'axios';
import store from '../store';

const KEY = 'cd6b1791cda5414e8382e5bf8b7985fb';

export const getNews = (country, category, query, result) => async dispatch => {
    const cat = category ? `&category=${category}` : '';
    const q = query ? `&q=${query}` : '';
    const params = new URLSearchParams([['pageSize', result ? 5 : 20]]);
    try{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}${q}${cat}&apiKey=${KEY}`, { params });
        const modifiedResults = res.data.articles.map((article, index) => {
            return {...article, id : index +1};
        })
        dispatch( {
            type: GET_NEWS,
            payload: modifiedResults
        })
    }
    catch(error){
        dispatch( {
            type: NEWS_ERROR,
            payload: error,
        })
    };

}

export const getNewsById = (id) => async dispatch => {
    try{
        const allNews = store.getState().newsList.news;
        const singleNews = allNews.filter(function (n) {
            return n.id === id;
        });
        dispatch({
            type: GET_SINGLE_NEWS,
            payload: singleNews[0]
        })
    }
    catch(error){
        dispatch({
            type: SINGLE_NEWS_ERROR,
            payload: error,
        })
    };
}