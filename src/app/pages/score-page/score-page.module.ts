import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePageComponent} from './score-page.component';
import {ScorePageRoutingModule} from "./score-page.routing.module";
import {IonicModule} from "@ionic/angular";
import {TranslateModule} from "@ngx-translate/core";
import {ScoreItemComponent} from "./score-item/score-item.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ScorePageComponent, ScoreItemComponent],
  imports: [
    CommonModule,
    ScorePageRoutingModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [ScorePageComponent]
})
export class ScorePageModule { }
