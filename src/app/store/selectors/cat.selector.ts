import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CatModel } from '../models/cat.model';

export const selectCatsState = createFeatureSelector<CatModel[]>('cats');

export const selectAllCats = createSelector(
  selectCatsState,
  (cats: CatModel[]) => cats
);
