import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CatModel} from "../../store/models/cat.model";
import {selectAllCats} from "../../store/selectors/cat.selector";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {

   cats$!: Observable<CatModel[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.cats$ = this.store.select(selectAllCats);
    this.cats$.subscribe(value => {
      console.log(value);
    })
  }

}
