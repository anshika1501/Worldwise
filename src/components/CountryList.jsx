import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import CountryItem from './CountryItem.jsx';
import Message from './Message.jsx';

function CountryList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;

    if (!cities.length) 
        return (
        <Message message="Add your first city by clicking on a city on your map" />
    );

    const countries=cities.reduce((arr,city)=>
       { if(!arr.map(el => el.country).includes(city.country))
         return [...arr,{country: city.country,emoji:city.emoji}];
    else return arr;
    
    } ,[]);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}       {/* For each country object in cities, return a <CityItem> component.

3. <CountryItem country={country} />

This renders the CountryItem component and passes a prop called city to it. */}
        </ul>
    );
}
export default CountryList;
