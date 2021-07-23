import React, {useState} from 'react';
import NewsList from './NewsList';
import NewsCategories from './NewsCategories';
import SearchNews from './SearchNews';
import NewsDetails from './NewsDetails';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {

    const [country, setCountry] = useState('gb');
    const [disable, setDisable] = useState(false);
    //const [clicked, setClicked] = useState(""); napravi callback funkciju kad se klikne da onemoguci button u hederu

    function onCountryChange(country, disable){
        setCountry(country);
        setDisable(disable);
    }

        return (
            <div>
                <BrowserRouter>
                    
                        <Header disable={disable} country={country} onCountryChange={onCountryChange}/>
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
                        </Switch>
                    
                </BrowserRouter>
            </div>
        );
}

export default App;