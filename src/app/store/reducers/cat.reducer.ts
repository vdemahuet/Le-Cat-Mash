import {Action, createReducer, on} from '@ngrx/store';
import {updateCat, setCats} from '../actions/cat.actions';
import {CatModel} from "../models/cat.model";

export const initialState: CatModel[] = [];

const _catReducer = createReducer(
  initialState,
  on(setCats, (state, { cats }) => {
    return [...cats];
  }),
  on(updateCat, (state, { index, changes }) => {
    return state.map(cat => cat.index === index ? { ...cat, ...changes } : cat);
  })
);

export function catReducer(state: CatModel[] | undefined, action: Action) {
  return _catReducer(state, action);
}

