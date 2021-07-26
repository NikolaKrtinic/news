import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';

import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../actions/newsAction'

const SearchNews = ({country}) =>{

    const [term, setTerm] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)
    const {loading, error, news} = newsList

    function onFormSubmit(e){
        e.preventDefault();
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if(term){
                dispatch(getNews(country,category,term))
            }  
          }, 1000);
          return () => clearTimeout(timer);  
      }, [dispatch, country,category,term])

    return(
        <div>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <Input
                    placeholder='Search term'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchNews;