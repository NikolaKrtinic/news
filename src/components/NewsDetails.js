import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsById} from '../actions/newsAction';
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    textAlign: 'left',
    marginTop: '2%',
    marginLeft: '7%',
    marginRight: '7%',
  },
  typography: {
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '1%',
    border: 'solid black 1px'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
});

const NewsDetails = () => {

    const history = useHistory();

    const classes = useStyles();
    const dispatch = useDispatch()
    const currentId = parseInt(useParams().id);

    const newsItem = useSelector(state => state.newsItem);
    const {loading, error, singleNews} = newsItem
    
    useEffect(() => {
      dispatch(getNewsById(currentId));
    }, [dispatch,currentId]);
        
    return (
      <>
        {loading ? "Loading..." : error ? error.message : 
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {singleNews.title}
            </Typography>
          </CardContent>
            <CardMedia
              component="img"
              alt={singleNews.title}
              image={singleNews.urlToImage}
              width="460" height="345"
            />
            <CardContent className={classes.typography}>
            <Typography variant="body1" component="p" >
              {singleNews.content}
            </Typography>
          </CardContent>
          <Button onClick={ ()=>history.goBack() }size="small" color="primary" variant="outlined">
            Back to list
        </Button>
    </Card>}  
      </>
    );
}

export default NewsDetails;