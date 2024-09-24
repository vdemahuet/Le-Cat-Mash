import {Component, Input, OnInit} from '@angular/core';
import {CatModel} from "../../../store/models/cat.model";

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent  implements OnInit {

  @Input() info!: CatModel;

  constructor() { }

  ngOnInit() {}

}
