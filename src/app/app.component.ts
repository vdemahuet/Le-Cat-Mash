import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {CatModel} from "./store/models/cat.model";
import {loadCats} from "./store/actions/cat.actions";
import {selectAllCats} from "./store/selectors/cat.selector";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private selectAllCats$!: Subscription;

  constructor(private translate: TranslateService, private store: Store<{ chats: CatModel[] }>) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    this.selectAllCats$ = this.store.select(selectAllCats).pipe(take(1)).subscribe((cats: CatModel[]) => {
      if (cats.length === 0) {
      this.loadCats();
      }
    })
  }

  private loadCats(): void {
    this.store.dispatch(loadCats());
  }

  ngOnDestroy() {
    this.selectAllCats$.unsubscribe();
  }
}
