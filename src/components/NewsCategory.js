import React, {useEffect} from 'react';
import NewsItem from './NewsItem';
import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../actions/newsAction'

import { Grid } from '@material-ui/core';

const NewsCategory = ({category, country}) => {

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)
    const {loading, error, news} = newsList

    useEffect(() => {
        dispatch(getNews(country,category)) 
      }, [dispatch, country, category])

    const renderedList = news.map((n) =>{
        return (
            <Grid item xs={12} sm={4}>
                <NewsItem singleNews={n} key={n.id}/>
            </Grid>
        )
    })
    
        return (
            <>
                {loading ? "Loading..." : error ? error.message : <Grid container spacing={4}>{renderedList}</Grid>}
            </>
            )
}

export default NewsCategory;