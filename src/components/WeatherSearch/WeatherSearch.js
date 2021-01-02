import React, {useState} from 'react';
import classes from './WeatherSearch.module.sass';
import {getOtherLocationWeatherByCoords} from '../../store/actions/weather.action';
import {useDispatch} from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function WeatherSearch() {

  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const searchOptions = {
    types: ['(cities)']
  };

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const coords = await getLatLng(results[0]);
    dispatch(getOtherLocationWeatherByCoords(coords))
    setCity('')
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        <p>Type a city name and see its weather on the map!<br/>
             Click the icon to expand.
        </p>
        <p>Впишите город и посмотрите его погоду на карте!<br/>
           Кликните иконку для просмотра деталей
        </p>
      </div>
      <PlacesAutocomplete
          searchOptions={searchOptions}
          value={city}
          onChange={setCity}
          onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className={classes.autocompleteWrapper}>
              <input {...getInputProps({
                          placeholder: 'Type city',
                          className: `${classes.input}`
                      })}
              />
              <div className={classes.dropdown}
                   style={{visibility: `${suggestions.length > 0 ? 'visible' : 'hidden'}`, border: '1px solid purple'}}
              >
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion,id) => {
                  const style = {
                    background: suggestion.active ? '#E9DEFF' : 'white',
                    padding: '3px 5px',
                  }
                  return (
                          <div key={id} {...getSuggestionItemProps(suggestion, {style})}
                          >
                            {suggestion.description}
                          </div>
                      )
                })}
              </div>
            </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}
