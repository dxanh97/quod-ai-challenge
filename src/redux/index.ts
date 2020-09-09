import {
  useSelector as _useSelector,
  useDispatch as _useDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState, AppDispatch } from './store';

const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
const useDispatch = (): AppDispatch => _useDispatch();

export { useSelector, useDispatch };
