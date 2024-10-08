import {createAction, props} from "@ngrx/store";
import {CatModel} from "../models/cat.model";

export const loadCats = createAction('[Cat] Load Cats');

export const updateCat = createAction(
  '[Cat] Update Cat',
  props<{ id: string, changes: Partial<CatModel> }>()
);

export const setCats = createAction(
  '[Cat] Set Cats',
  props<{ cats: CatModel[] }>()
);

export const deleteCat = createAction(
  '[Cat] Delete Cat',
  props<{id: string}>()
)
