import {ScoreItemEnum} from "../enums/score-item-enum";
import {CatModel} from "../../store/models/cat.model";

export interface ScoreItemEvent {
  event: ScoreItemEnum,
  value: CatModel;
}
