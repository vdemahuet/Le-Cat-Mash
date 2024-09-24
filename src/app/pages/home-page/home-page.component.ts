import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {CatModel} from "../../store/models/cat.model";
import {selectAllCats} from "../../store/selectors/cat.selector";
import {updateCat} from "../../store/actions/cat.actions";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {

   catsList: CatModel[] = [];
   randomCats: CatModel[] = []
   cats$!: Observable<CatModel[]>;
   private subscription$!: Subscription;
   private selectRandomFlag: boolean = false;

  constructor(private store: Store) { }

  ngOnInit() {
    this.cats$ = this.store.select(selectAllCats);
    this.subscription$ = this.cats$.subscribe(list => {
      this.catsList = list;
      if (this.catsList.length > 1 && !this.selectRandomFlag) {
        this.selectRandomCats();
        this.selectRandomFlag = true;
      }
    })
  }


  private selectRandomCats(): void {
    const shuffledCats = HomePageComponent.shuffleArray([...this.catsList]);
    this.randomCats = shuffledCats.slice(0, 2);
  }

  private static shuffleArray(array: CatModel[]): CatModel[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public updateCat(index: number | null): void {
    if(index !== null) {
      const selectedCat = this.catsList.find((cat: CatModel) => cat.index === index);
      if (selectedCat) {
        this.store.dispatch(updateCat({
          index: selectedCat.index,
          changes: {score: selectedCat.score + 1}
        }));
        this.selectRandomCats();
      }
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
