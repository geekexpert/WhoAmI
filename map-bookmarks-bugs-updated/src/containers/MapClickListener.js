import { useMapEvent } from 'react-leaflet';
import { connect } from 'react-redux';
import { createBookmark } from '../actions';

const mapDispatchToProps = dispatch => ({
  promptBookmark: loc => dispatch(createBookmark(loc)),
});

export default connect(
  null,
  mapDispatchToProps,
)(({ promptBookmark }) => {
  useMapEvent('click', event => {
    promptBookmark([event.latlng.lng, event.latlng.lat]);
  });
  return null;
});
