import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseCreditComponent } from './analyse-credit/analyse-credit.component';
import { FindIdentifierComponent } from './find-identifier/find-identifier.component';

const routes: Routes = [
  {
    path: '',
    component: FindIdentifierComponent
  },
  { 
    path: ':id/detail',
    component: AnalyseCreditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsResultRoutingModule { }
