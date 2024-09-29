import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private showToastSubject = new BehaviorSubject<boolean>(false);
  showToast$ = this.showToastSubject.asObservable();

  public toastMessage: string = '';

  constructor( private toastController: ToastController) {}

  async createToast(message: string) {
   const toast = await this.toastController.create({
    message: message,
    duration: 3000,
    position: 'bottom',
     color: 'primary',
  });
  await toast.present();
  }
}
