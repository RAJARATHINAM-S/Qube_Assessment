import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import { getPreloadedState, saveToLocalStorage } from './localStorage';

const combinedReducer = combineReducers({
  common: commonSlice,
});
const rootReducer = (state: any, action: any) => {
  if (action.type === 'login/logout') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadedState(),
  // devTools: true
});

function onStateChange() {
  saveToLocalStorage(store.getState());
}

store.subscribe(onStateChange);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
