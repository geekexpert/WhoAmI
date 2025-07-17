import { uniqueId } from 'lodash';
import { NZ_BOUNDS, NZ_CENTER_POSITION } from '../constants';
import * as actions from '../actions';

const genDataIdx = () => uniqueId('bm.');
const ids = [genDataIdx(), genDataIdx(), genDataIdx()];
const initialState = {
  zoomedIdx: null,
  data: {
    [ids[0]]: {
      id: ids[0],
      position: NZ_CENTER_POSITION,
      text: 'NZ Center',
    },
    [ids[1]]: {
      id: ids[1],
      position: NZ_BOUNDS[0],
      text: 'NZ Bottom Left',
    },
    [ids[2]]: {
      id: ids[2],
      position: NZ_BOUNDS[1],
      text: 'NZ Top Right',
    },
  },
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DELETE_BOOKMARK: {
      const newState = { ...state };
      delete newState.data[action.id];
      return newState;
    }
    case actions.CREATE_BOOKMARK: {
      const { result, coords } = action;
      const id = genDataIdx();
      return {
        ...state,
        data: {
          ...state.data,
          [id]: { id, position: coords, text: result },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default bookmarkReducer;
