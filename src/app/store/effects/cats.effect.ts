import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs';
import {loadCats, setCats} from '../actions/cat.actions';
import {CatModel} from '../models/cat.model';

interface CatJson {
  images: CatModel[];
}

@Injectable()
export class CatEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCats),
      mergeMap(() =>
        this.http.get<CatJson>('https://data.latelier.co/cats.json').pipe(
          map((cats: CatJson) => {
            const modifiedCats = cats.images.map((cat, index) => ({
              ...cat,
              score: 0,
              name: null,
              index,
            }));
            return setCats({ cats: modifiedCats });
          }),
          catchError(() => {
            return this.http.get<CatModel[]>('assets/json/cats.json').pipe(
              map((backupCats: CatModel[]) => {
                const modifiedBackupCats = backupCats.map(
                  (cat, index) => ({
                    ...cat,
                    score: 0,
                    name: null,
                    index,
                  })
                );
                return setCats({ cats: modifiedBackupCats });
              }),
            );
          })
        )
      )
    )
  );
}
