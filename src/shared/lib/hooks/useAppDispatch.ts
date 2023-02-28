import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../config/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
