import React, {useEffect} from 'react';
import NewsItem from './NewsItem';
import {useDispatch, useSelector} from 'react-redux'
import {getNews} from '../actions/newsAction'
import { Link } from "react-router-dom";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
      root: {
        marginTop: '2%',
        marginLeft: '7%',
        marginRight: '7%',
      },
    });

const Accordion = withStyles({
      root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
        },
      },
      expanded: {},
    })(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const NewsCategories = ({country}) =>{
      
      const categories = ['business','entertainment', 'general', 'health', 'science', 'sports', 'technology'];
      const classes = useStyles();

      const [expanded, setExpanded] = React.useState('business');
      const dispatch = useDispatch()
      const newsList = useSelector(state => state.newsList)
      const {loading, error, news} = newsList

      const handleChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
      };
      const result = 5;
      useEffect(() => {
            if(expanded)
            dispatch(getNews(country,expanded, '', result)) 
      }, [dispatch, country, expanded, result])

      const renderedList = news.map((n) =>{
            return (
                  <Grid item xs={12} sm={4} key={n.id}>
                        <NewsItem singleNews={n}/>
                  </Grid>
            )
      })

      const renderedAccordion = categories.map((cat, id) => {
            return (
                  <Accordion square expanded={expanded === `${cat}`} onChange={handleChange(`${cat}`)} key={id+1}>
                        <AccordionSummary >
                              <Typography>
                                    <Button size="small" color="primary" variant="outlined"> 
                                    <Link to={"/categories/" + cat} >
                                          {cat} 
                                    </Link>
                                    </Button>
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              {loading ? "Loading..." : error ? error.message : (
                                    <Grid container 
                                          spacing={4} direction="row" 
                                          justifyContent="center" alignItems="flex-start">
                                          {renderedList}
                                    </Grid>
                              )}
                        </AccordionDetails>
                  </Accordion>
            )
      })
    
      return (
            <div className={classes.root}> 
                  <h1>
                        Top 5 news by categories from {country === 'gb' ? 'Great Britain:' : 'America:'}
                  </h1>
                  {renderedAccordion}
            </div>
      )
}

export default NewsCategories;