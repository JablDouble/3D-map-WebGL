import { RootState } from '../../../shared/public-api';

const getAuthSelector = (state: RootState) => state.auth;

export const getUserEmail = (state: RootState) => getAuthSelector(state).user?.email;
