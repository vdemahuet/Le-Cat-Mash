import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent  implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {}

  public navigateTo(path: string): void {
    this.router.navigate([path]);
    this.menu.close("firstMenu");
  }


}
