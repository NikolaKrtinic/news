import React from 'react';
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    title: {
        fontSize: 14
    }
})

const NewsItem = ({ singleNews }) => {
const classes = useStyles();
        return (
            <Card className={classes.root} key={singleNews.id}>
                <CardHeader title={singleNews.title}/>
                <CardMedia style={{height: "150px"}} image={singleNews.urlToImage} alt={singleNews.title}/>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {singleNews.description}
                    </Typography>
                </CardContent>
                <Button size="small" color="primary" variant="outlined">  
                    <Link to={"/news/" + singleNews.id}>
                        Show more
                    </Link>
                </Button>
            </Card>
        );
};

export default NewsItem;