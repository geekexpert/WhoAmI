import { connect } from 'react-redux';
import BookmarkMarkers from '../components/BookmarkMarkers';

const mapStateToProps = state => ({
  data: Object.values(state.bookmarks.data),
});

export default connect(mapStateToProps)(BookmarkMarkers);
