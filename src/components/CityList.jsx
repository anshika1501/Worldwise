import styles from './CityList.module.css'
import Spinner from "./Spinner";
import CityItem from './CityItem';
import Message from './Message.jsx';

function CityList({ cities, isLoading }) {

  if (isLoading) return <Spinner />;

  if (!cities.length) return (
    <Message message="Add your first city by clicking on a city on your map" />
  );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}       {/* For each city object in cities, return a <CityItem> component.

3. <CityItem city={city} />

This renders the CityItem component and passes a prop called city to it. */}
    </ul>
  );
}
export default CityList;