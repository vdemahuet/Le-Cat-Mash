import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  public screenWidth$ = this.screenWidth.asObservable();

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(event: any) {
    this.screenWidth.next(event.target.innerWidth);
  }

  public isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
