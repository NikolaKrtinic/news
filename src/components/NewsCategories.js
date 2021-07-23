import React from 'react';
import NewsCategory from './NewsCategory';

const NewsCategories = ({country}) =>{
    
    
      return (
      <>
         <div><NewsCategory category={"business"} country={country}/></div>
         <div><NewsCategory category={"entertainment"} country={country}/></div>
         <div><NewsCategory category={"general"} country={country}/></div>
         <div><NewsCategory category={"health"} country={country}/></div>
         <div><NewsCategory category={"science"} country={country}/></div>
         <div><NewsCategory category={"sports"} country={country}/></div>
         <div><NewsCategory category={"technology"} country={country}/></div>
      </>
      )
}

export default NewsCategories;