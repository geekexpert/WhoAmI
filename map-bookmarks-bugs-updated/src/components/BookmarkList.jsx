import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  row-gap: 0.5em;
`;
const ListItem = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 0.5em;
`;

const BookmarkList = ({ data = [], deleteBookmark }) => (
  <ListWrapper>
    {data.map(({ id, text }) => (
      <ListItem key={id}>
        {/* <button type="button" title="Zoom To">
          🔍
        </button> */}
        <span>{text}</span>
        <button type="button" title="Delete" onClick={() => deleteBookmark(id)}>
          🗑️
        </button>
      </ListItem>
    ))}
  </ListWrapper>
);
BookmarkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      position: PropTypes.arrayOf(PropTypes.number),
      text: PropTypes.string,
    }),
  ),
  deleteBookmark: PropTypes.func,
};
export default BookmarkList;
