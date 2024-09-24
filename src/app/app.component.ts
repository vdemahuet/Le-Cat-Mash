import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {CatModel} from "./store/models/cat.model";
import {loadCats} from "./store/actions/cat.actions";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService, private store: Store<{ chats: CatModel[] }>) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    console.log("TOTOTOTO");
    this.loadCats();
  }

  private loadCats(): void {
    this.store.dispatch(loadCats());
  }
}
