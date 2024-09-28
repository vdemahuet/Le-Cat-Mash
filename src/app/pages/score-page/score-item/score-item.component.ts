import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatModel} from "../../../store/models/cat.model";
import {FormControl, FormGroup} from "@angular/forms";
import {ScoreItemEvent} from "../../../interfaces/models/score-item-event";
import {ScoreItemEnum} from "../../../interfaces/enums/score-item-enum";


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss'],
})
export class ScoreItemComponent  implements OnInit {

  @Input() cat!: CatModel;
  @Output() catEvent: EventEmitter<ScoreItemEvent> = new EventEmitter();

  public isEditable: boolean = false;
  public myForm!: FormGroup;

  constructor() {
  }

  ngOnInit() {
     this.myForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  public deleteCat() {
    this.catEvent.emit({event: ScoreItemEnum.DELETE, value: this.cat});
  }

  public edit() {
    this.catEvent.emit({event: ScoreItemEnum.EDIT, value: {...this.cat, name: this.myForm.value.name}})
    this.isEditable = false;
  }

}
