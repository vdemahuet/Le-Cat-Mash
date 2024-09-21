import {Component, OnInit} from '@angular/core';
import {ScreenSizeService} from "../../../services/screen-size.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  notMobile: boolean = false;
  private resizeSubscription!: Subscription;

   constructor(private screenSizeService: ScreenSizeService) {
  }

  ngOnInit() {
      this.resizeSubscription = this.screenSizeService.screenWidth$.subscribe(width => {
        this.notMobile = width > 768;
      });
  }

  ngOnDestroy() {
     this.resizeSubscription.unsubscribe();
  }

}
