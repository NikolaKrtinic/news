import React, {useState} from 'react';
import NewsList from './NewsList';
import NewsCategories from './NewsCategories';
import SearchNews from './SearchNews';
import NewsDetails from './NewsDetails';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsCategory from './NewsCategory';


const App = () => {

    const [country, setCountry] = useState('gb');

    function onCountryChange(country){
        setCountry(country);
    }

        return (
            <div>
                <BrowserRouter>
                        <Header country={country} onCountryChange={onCountryChange}/>
                        <Switch>
                        <Route 
                            path={["/", "/news"]} render={() => (
                                <NewsList   
                                    country={country}
                                />
                            )} exact={true} 
                        />
                        <Route path="/categories" render={() => (
                                <NewsCategories
                                    country={country} 
                                />
                            )} exact={true}  />
                        <Route path="/search" render={() => (
                                <SearchNews
                                    country={country} 
                                />
                            )} exact={true}  />
                        <Route path="/news/:id" render={() => (
                            <NewsDetails
                                
                            />
                        )}/>
                        <Route path="/categories/:category" render={() => (
                            <NewsCategory
                                country={country} 
                            />
                        )}/>
                        </Switch>
                </BrowserRouter>
            </div>
        );
}

export default App;