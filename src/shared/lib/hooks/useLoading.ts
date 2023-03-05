import { appActions, appSelectors } from '../../model';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

const useLoading = (): [boolean, (value: boolean) => any] => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(appSelectors.getIsLoading);
  return [isLoading, (value: boolean) => dispatch(appActions.setLoading(value))];
};

export default useLoading;
