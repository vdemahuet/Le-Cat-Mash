import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatModel} from "../../../store/models/cat.model";


@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss'],
})
export class ScoreItemComponent  implements OnInit {

  @Input() cat!: CatModel;
  @Output() deleteCatEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public deleteCat() {
  this.deleteCatEvent.emit(this.cat.id);
  }

}
