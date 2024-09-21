import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {IonicModule} from "@ionic/angular";
import { HamburgerMenuComponent} from './hamburger-menu/hamburger-menu.component';


@NgModule({
  declarations: [HeaderComponent, HamburgerMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
