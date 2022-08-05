import {React } from 'react'
import './App.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import networkData from './points.json'
import MarkerCode from './Components/Marker'
import RangerHeader from './Components/RangeHeader'

const circleColors = [
  "purple",
  "green",
  "blue",
  "brown",
  "#fa9005",
]


function App() {

  return (
      <>
        <RangerHeader
          circleColors={circleColors}
        />
        <MapContainer 
            center = { [ 20.593683, 78.962883 ] }
            zoom = { 2 }
            scrollWheelZoom = { true } 
        >
        <TileLayer 
            attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
            url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
        { networkData.map(eachData => (
            <MarkerCode 
              circleColors={circleColors}
              networkData={eachData}
            />
        ))}
        </MapContainer> 
      </>
  );
}

export default App;

