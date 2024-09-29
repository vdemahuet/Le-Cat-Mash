import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatModel} from "../../store/models/cat.model";
import {selectAllCats} from "../../store/selectors/cat.selector";
import {Observable} from "rxjs";
import {deleteCat, updateCat} from "../../store/actions/cat.actions";
import {ScoreItemEvent} from "../../interfaces/models/score-item-event";
import {ScoreItemEnum} from "../../interfaces/enums/score-item-enum";
import {ToastService} from "../../services/toast/toast.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent  implements OnInit {

  cats$!: Observable<CatModel[]>;

  constructor(private store: Store, private toastService: ToastService, private translate: TranslateService) { }

  ngOnInit() {
    this.cats$ = this.store.select(selectAllCats);
  }

  public async handleEvent(itemEvent: ScoreItemEvent): Promise<void> {
    switch (itemEvent.event) {
      case ScoreItemEnum.DELETE:
        this.store.dispatch(deleteCat({id: itemEvent.value.id}));
        await this.toastService.createToast(this.translate.instant("SCORES.LIST.ITEM.ACTION_MESSAGE.DELETE"));
        break;
      case ScoreItemEnum.EDIT:
        this.store.dispatch(updateCat({id: itemEvent.value.id, changes: {name: itemEvent.value.name}}))
        await this.toastService.createToast(this.translate.instant("SCORES.LIST.ITEM.ACTION_MESSAGE.EDIT"));
    }
  }

}
