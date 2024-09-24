import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule} from './home-page-routing.module'
import {TranslateModule} from "@ngx-translate/core";
import {IonicModule} from "@ionic/angular";
import {BannerComponent} from "./banner/banner.component";
import {CatCardComponent} from "./cat-card/cat-card.component";


@NgModule({
  declarations: [HomePageComponent, BannerComponent, CatCardComponent],
    imports: [
        CommonModule,
        IonicModule,
        HomePageRoutingModule,
        TranslateModule
    ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
