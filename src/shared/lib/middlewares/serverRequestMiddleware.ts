import { appActions } from '../../model';

const serverRequestMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith('/pending')) {
    // The action type ends with '/pending' if it's a server request
    store.dispatch(appActions.fetchDataStart());
  } else if (action.type.endsWith('/fulfilled')) {
    // The action type ends with '/fulfilled' if the server request succeeded
    store.dispatch(appActions.fetchDataSuccess());
  } else if (action.type.endsWith('/rejected')) {
    // The action type ends with '/rejected' if the server request failed
    store.dispatch(appActions.fetchDataFailure(action.payload));
  }
  return next(action);
};

export default serverRequestMiddleware;
