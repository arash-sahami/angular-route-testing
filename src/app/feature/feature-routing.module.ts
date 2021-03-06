import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from 'app/feature/feature.component';

const routes: Routes = [
  { path: 'feature', component: FeatureComponent }
  // { path: '', component: FeatureComponent } // Lazy loading
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
