import './App.css';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import OtherLocations from './components/OtherLocations/OtherLocations';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import ContainerStickyAlert from './components/StickyAlert/StickyAlert';
import { SnackbarProvider } from 'notistack';

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
               </div>
              </div>
          </div>
         </ContainerStickyAlert>
       </SnackbarProvider>
  );
}

export default App;
