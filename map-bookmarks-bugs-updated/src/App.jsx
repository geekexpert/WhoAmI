import SplitPane from 'react-split-pane';
import { Provider } from 'react-redux';
import Map from './components/Map';
import store from './store';
import BookmarkList from './containers/BookmarkList';

function App() {
  return (
    <Provider {...{ store }}>
      <SplitPane split="vertical" defaultSize="50vw">
        <Map />
        <div style={{ padding: '1em' }}>
          <header
            style={{
              textAlign: 'center',
              paddingBottom: '1em',
              marginBottom: '1em',
              borderBottom: '1px solid black',
            }}
          >
            <h1 style={{ margin: 0 }}>Welcome to Map Bookmarks</h1>
            Feel free to browse the map, and click to create a bookmark.
          </header>
          <BookmarkList />
        </div>
      </SplitPane>
    </Provider>
  );
}

export default App;
