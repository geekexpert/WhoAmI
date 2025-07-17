import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';
import { deleteBookmark } from '../actions';

const mapStateToProps = state => ({
  data: Object.values(state.bookmarks.data),
});

const mapDispatchToProps = dispatch => ({
  deleteBookmark: id => dispatch(deleteBookmark(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
