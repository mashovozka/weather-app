import './App.css';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import OtherLocations from './components/OtherLocations/OtherLocations';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import ContainerStickyAlert from './components/StickyAlert/StickyAlert';
import { SnackbarProvider } from 'notistack';
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";

function App() {
  return (
      <SnackbarProvider maxSnack={10}>
        <ContainerStickyAlert>
          <div className='wrapper' data-test='appComponent'>
            <h1 className='header'>WEATHER APP</h1>
              <div className='content-wrapper'>
                <div className='MainInfo'>
                  <CurrentLocation/>
                </div>
                <div className='otherLocations'>
                  <WeatherSearch/>
                  <OtherLocations/>
                </div>
                <div className='MapsWrapper'>
                    <GoogleMaps
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCSCREDVjbJ-WOVvD2JTWGCViXbwgjbyP0`}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
               </div>
              </div>
          </div>
         </ContainerStickyAlert>
       </SnackbarProvider>
  );
}

export default App;
