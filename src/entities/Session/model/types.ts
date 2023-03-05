import { User } from '../types';

export interface AuthState {
  user: User | null;
  isAuth: boolean;
}
