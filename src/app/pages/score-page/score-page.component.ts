import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatModel} from "../../store/models/cat.model";
import {selectAllCats} from "../../store/selectors/cat.selector";
import {Observable} from "rxjs";
import {deleteCat, updateCat} from "../../store/actions/cat.actions";
import {ScoreItemEvent} from "../../interfaces/models/score-item-event";
import {ScoreItemEnum} from "../../interfaces/enums/score-item-enum";

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent  implements OnInit {

  cats$!: Observable<CatModel[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.cats$ = this.store.select(selectAllCats);
  }

  public handleEvent(itemEvent: ScoreItemEvent): void {
    switch (itemEvent.event) {
      case ScoreItemEnum.DELETE:
        this.store.dispatch(deleteCat({id: itemEvent.value.id}));
        break;
      case ScoreItemEnum.EDIT:
        this.store.dispatch(updateCat({id: itemEvent.value.id, changes: {name: itemEvent.value.name}}))
    }
  }

}
