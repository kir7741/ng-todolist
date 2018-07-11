import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Copmponent
import { DashboardComponent } from './dashboard/dashboard.component';

// Const
import { appRoutePath } from './app-route-path.const';
import { dashboardRoutePath } from './constants/dashboard-route-path.const';

// 沒有定義的route，全部導回dashboard
const routes: Routes = [
  {
    path: '**',
    redirectTo: appRoutePath.dashboard + '/' + dashboardRoutePath.task,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
