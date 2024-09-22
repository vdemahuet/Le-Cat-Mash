import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {IonicModule} from "@ionic/angular";
import { HamburgerMenuComponent} from './hamburger-menu/hamburger-menu.component';
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeaderComponent, LanguageSwitcherComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
