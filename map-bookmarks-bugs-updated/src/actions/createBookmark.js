export const CREATE_BOOKMARK = 'CREATE_BOOKMARK';

export const createBookmark = coords => dispatch => {
  // eslint-disable-next-line no-alert
  const result = window.prompt(
    'Enter a description for the bookmark (or press cancel to exit)',
    '',
  );
  if (result !== null) {
    dispatch({ type: CREATE_BOOKMARK, result, coords });
  }
};
