import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'analyse',
    loadChildren: () => import('./analytics-result/analytics-result.module').then(m => m.AnalyticsResultModule)
  },
  {
    path: '',
    redirectTo: "/analyse", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
