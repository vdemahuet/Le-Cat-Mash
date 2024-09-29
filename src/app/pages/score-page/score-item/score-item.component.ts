import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatModel} from "../../../store/models/cat.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ScoreItemEvent} from "../../../interfaces/models/score-item-event";
import {ScoreItemEnum} from "../../../interfaces/enums/score-item-enum";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss'],
})
export class ScoreItemComponent  implements OnInit {

  @Input() cat!: CatModel;
  @Output() catEvent: EventEmitter<ScoreItemEvent> = new EventEmitter();

  myFormSubscription$: Subscription | undefined;
  public isEditable: boolean = false;
  public myForm!: FormGroup;
  public isNameInvalid: boolean = false;

  constructor() {
  }

  ngOnInit() {
     this.myForm = new FormGroup({
      name: new FormControl(this.cat.name, Validators.required),
    });

     this.myFormSubscription$ = this.myForm.get('name')?.valueChanges.subscribe(() => {
        this.isNameInvalid = this.isInvalid('name');
    });
  }

  public deleteCat() {
    this.catEvent.emit({event: ScoreItemEnum.DELETE, value: this.cat});
  }

  public edit() {
    if (this.myForm.valid) {
      this.catEvent.emit({event: ScoreItemEnum.EDIT, value: {...this.cat, name: this.myForm.value.name}})
      this.isEditable = false;
    } else {
      this.isNameInvalid = true;
    }
  }

  public isInvalid(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return (control?.invalid ?? false) && ((control?.dirty ?? false) || (control?.touched ?? false));
  }

  ngOnDestroy() {
    if (this.myFormSubscription$)
      this.myFormSubscription$.unsubscribe();
  }

}
