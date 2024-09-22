import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePageComponent} from './score-page.component';
import {ScorePageRoutingModule} from "./score-page.routing.module";


@NgModule({
  declarations: [ScorePageComponent],
  imports: [
    CommonModule,
    ScorePageRoutingModule
  ],
  exports: [ScorePageComponent]
})
export class ScorePageModule { }
