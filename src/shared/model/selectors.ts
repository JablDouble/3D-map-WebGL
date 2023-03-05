const getAppSelector = (state: RootState) => state.app;

export const getIsLoading = (state: RootState) => getAppSelector(state).isLoading;

export const getError = (state: RootState) => getAppSelector(state).error;
