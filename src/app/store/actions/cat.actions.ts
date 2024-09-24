import {createAction, props} from "@ngrx/store";
import {CatModel} from "../models/cat.model";

export const loadCats = createAction('[Cat] Load Cats');

export const updateCat = createAction(
  '[Cat] Update Cat',
  props<{ index: number, changes: Partial<CatModel> }>()
);

export const setCats = createAction(
  '[Cat] Set Cats',
  props<{ cats: CatModel[] }>()
);
