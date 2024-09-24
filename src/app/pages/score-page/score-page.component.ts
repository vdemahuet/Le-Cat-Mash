import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatModel} from "../../store/models/cat.model";
import {selectAllCats} from "../../store/selectors/cat.selector";
import {Observable} from "rxjs";

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

}
