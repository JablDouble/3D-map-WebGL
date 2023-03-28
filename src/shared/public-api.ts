import AppLocalStorageAPI from './api/appLocalStorage';
import AuthAPI from './api/auth';
import SpotifyAPI from './api/spotify';
import $api from './config/axiosInstance';
import googleOAuthURL from './config/googleOAuth';
import GlobalErrorBoundary from './lib/errorBoundaries/GlobalErrorBoundary';
import convertHexToRGBA from './lib/helpers/convertHexToRGBA';
import convertMsToTimeFormat from './lib/helpers/convertMsToTimeFormat';
import createSafeAsyncThunk from './lib/helpers/createSafeAsyncThunk';
import useAppDispatch from './lib/hooks/useAppDispatch';
import useAppSelector from './lib/hooks/useAppSelector';
import useError from './lib/hooks/useError';
import useLoading from './lib/hooks/useLoading';
import serverRequestMiddleware from './lib/middlewares/serverRequestMiddleware';
import { PaletteColor } from './types/mui';
import Button from './ui/Button';
import CustomLink from './ui/CustomLink';
import GradientImageBox from './ui/GradientImageBox';
import Image from './ui/Image';
import Logo from './ui/Logo';
import NavLink from './ui/NavLink';
import TextField from './ui/TextField';

export * from './model';

// ui
export { Button, TextField, Logo, Image, NavLink, CustomLink, PaletteColor, GradientImageBox };

// lib
export {
  createSafeAsyncThunk,
  GlobalErrorBoundary,
  convertHexToRGBA,
  serverRequestMiddleware,
  convertMsToTimeFormat,
};

// api
export { AuthAPI, AppLocalStorageAPI, SpotifyAPI };

// lib/hooks
export { useAppDispatch, useLoading, useError, useAppSelector };

// config
export { googleOAuthURL, $api };
