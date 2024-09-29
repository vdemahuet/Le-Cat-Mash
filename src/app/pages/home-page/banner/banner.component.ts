import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public scrollTo() {
    const targetScrollElement = document.getElementById('targetScroll');
    if (targetScrollElement) {
      targetScrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
