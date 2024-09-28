import {Action, createReducer, on} from '@ngrx/store';
import {updateCat, setCats, deleteCat} from '../actions/cat.actions';
import {CatModel} from "../models/cat.model";

export const initialState: CatModel[] = [];

const _catReducer = createReducer(
  initialState,
  on(setCats, (state, { cats }) => {
    return [...cats];
  }),
  on(updateCat, (state, { id, changes }) => {
    return state.map(cat => cat.id === id ? { ...cat, ...changes } : cat);
  }),
  on(deleteCat, (state, {id}) => {
    const newState = [...state];
    newState.splice(newState.findIndex((cat: CatModel) => cat.id === id), 1);
    return newState;
  })
);

export function catReducer(state: CatModel[] | undefined, action: Action) {
  return _catReducer(state, action);
}

