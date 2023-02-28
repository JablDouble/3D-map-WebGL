import { appActions, appSelectors } from '../../public-api';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

const useError = (): [string | null, (value: string) => any] => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(appSelectors.getError);
  return [error, (value: string) => dispatch(appActions.setError(value))];
};

export default useError;
