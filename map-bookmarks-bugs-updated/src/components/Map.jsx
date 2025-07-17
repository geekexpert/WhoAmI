import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { NZ_BOUNDS } from '../constants';
import BookmarkMarkers from '../containers/BookmarkMarkers';
import MapClickListener from '../containers/MapClickListener';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
/* eslint-disable global-require */
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
/* eslint-enable global-require */
const API_KEY = '95294aa6d12846488be861d93858bb0d';
const Map = () => (
  <MapContainer bounds={NZ_BOUNDS} style={{ height: '100%' }}>
    <MapClickListener />
    <TileLayer
    attribution='© <a href="//www.linz.govt.nz/linz-copyright">LINZ CC BY 4.0</a> © <a href="//www.linz.govt.nz/data/linz-data/linz-basemaps/data-attribution">Imagery Basemap contributors</a>'
    url={`https://basemaps.linz.govt.nz/v1/tiles/aerial/EPSG:3857/{z}/{x}/{y}.webp?api=${API_KEY}`}
  />
    <BookmarkMarkers />
  </MapContainer>
);
export default Map;
