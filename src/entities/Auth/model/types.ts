import { User } from '../../public-api';

export interface AuthState {
  user: User | null;
  isAuth: boolean;
}
