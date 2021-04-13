import {combineReducers} from 'redux';

import arrWordsReducer from './arrWordsReducer';
import filterStatusReducter from './filterStatusReducter';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
  arrWords: arrWordsReducer,
  filterStatus: filterStatusReducter,
  isAdding: isAddingReducer,
});

export default reducer;