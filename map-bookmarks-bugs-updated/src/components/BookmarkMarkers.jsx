import { Marker, Popup } from 'react-leaflet';

const BookmarkMarkers = ({ data = [] }) =>
  data.map(({ id, position, text }) => (
    <Marker position={position} key={id}>
      <Popup>{text}</Popup>
    </Marker>
  ));
export default BookmarkMarkers;
