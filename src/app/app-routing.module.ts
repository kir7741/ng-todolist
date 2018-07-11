import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Copmponent
import { DashboardComponent } from './dashboard/dashboard.component';

// Const
import { appRoutePath } from './app-routing-path.const';

const routes: Routes = [
  { path: '', redirectTo: '/' + appRoutePath.dashboard, pathMatch: 'full' },
  { path: appRoutePath.dashboard, component: DashboardComponent },
  { path: '**', redirectTo:  '/' + appRoutePath.dashboard, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
