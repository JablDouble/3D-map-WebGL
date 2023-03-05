const getAuthSelector = (state: RootState) => state.auth;

export const getUserEmail = (state: RootState) => getAuthSelector(state).user?.email;
export const getIsAuth = (state: RootState) => getAuthSelector(state).isAuth;
