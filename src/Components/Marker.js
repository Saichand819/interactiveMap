import {  Marker , FeatureGroup, Circle, Popup} from 'react-leaflet'
import { useState } from 'react';
import { Icon } from 'leaflet'

const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const purpleOptions = { color: '#fa9005' }

const w = "#fa9005"
 
function MarkerCode({networkData,setActivePopUp,circleColors}){
   const [indexOfCircle, setIndexOfCircle] = useState(1);
   useState(()=>{
     const x = parseInt(networkData.data/200);
     setIndexOfCircle(x)
   })

   return (
    <FeatureGroup pathOptions={{color: circleColors[indexOfCircle]}}>
        <Popup>
           Data Usage: {networkData.data} units
           <br></br>
           ... anyother data
        </Popup>
        <Circle center={[networkData.Latitude,networkData.Longitude]} radius={400000} />
    </FeatureGroup>
   )
}

export default MarkerCode