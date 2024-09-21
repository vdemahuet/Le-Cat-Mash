import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScorePageComponent} from "./score-page.component";


const routes: Routes = [
  {
    path: '',
    component: ScorePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScorePageRoutingModule {}
