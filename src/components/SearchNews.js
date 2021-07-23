import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';

const SearchNews = () =>{

    const [term, setTerm] = useState('');

    useEffect(() => {

    });

    return(
        <div>
            <Input
                placeholder='Search term'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchNews;