import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CatModel } from '../models/cat.model';

export const selectCatsState = createFeatureSelector<CatModel[]>('cats');

export const selectAllCats = createSelector(
  selectCatsState,
  (cats: CatModel[]) => cats
);

export const selectAllCatsSort = createSelector(
  selectCatsState,
  (cats: CatModel[]) => [...cats].sort((a: CatModel, b: CatModel) => b.score - a.score)
);
