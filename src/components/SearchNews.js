import React, { useState, useEffect } from 'react';
import { Input, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewsItem from './NewsItem';

import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../actions/newsAction'

const useStyles = makeStyles({
    root: {
      marginTop: '2%',
      marginLeft: '7%',
      marginRight: '7%',
    },
  });

const SearchNews = ({country}) =>{

    const classes = useStyles();

    const [term, setTerm] = useState('');

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)
    const {loading, error, news} = newsList

    useEffect(() => {
        const timer = setTimeout(() => {
            if(term){
                dispatch(getNews(country,'',term))
            }  
          }, 1000);
          return () => clearTimeout(timer);  
      }, [dispatch, country,term])

      const renderedList = news.map((n) =>{
        return (
          <Grid item xs={12} sm={4} key={n.id}>
              <NewsItem singleNews={n} />
          </Grid>
        );
    });

    return(
        <div className={classes.root}>
            <h1>
                Search top news from {country === 'gb' ? 'Great Britain' : 'America'} by term:
            </h1>
                <Input style={{width: '50%'}}
                placeholder='Search term'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                />
            {loading ? "" : error ? error.message : (
                <Grid container 
                    spacing={4} direction="row" 
                    justifyContent="flex-start" alignItems="flex-start">
                    {renderedList}
                </Grid>
            )}
        </div>
    );
};

export default SearchNews;