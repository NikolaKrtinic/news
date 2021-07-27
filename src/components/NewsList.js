import React, {useEffect} from 'react'
import NewsItem from './NewsItem';

import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../actions/newsAction'

import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '2%',
    marginLeft: '7%',
    marginRight: '7%',
  },
});

const NewsList = ({ country }) => {

    const classes = useStyles();

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.newsList)
    const {loading, error, news} = newsList
    
    useEffect(() => {
        dispatch(getNews(country))
      }, [dispatch, country])
      
      const renderedList = news.map((n) =>{
          return (
            <Grid item xs={12} sm={4} key={n.id}>
                <NewsItem singleNews={n}/>
            </Grid>
          );
      });
        return (
        <div className={classes.root}>  
            <h1>
              Top news from {country === 'gb' ? 'Great Britain:' : 'America:'}
            </h1>
            {loading ? "Loading..." : error ? error.message : (
              <Grid container 
                spacing={4} direction="row" justifyContent="center" alignItems="flex-start">
                  {renderedList}
              </Grid>
            )}
        </div>
        )
}

export default NewsList;