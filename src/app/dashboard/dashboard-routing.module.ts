import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

// Component
import { DashboardComponent } from './dashboard.component';

// Contants
import { appRoutePath } from '../app-route-path.const';
import { dashboardRoutePath } from '../constants/dashboard-route-path.const';

// 沒有定義的路由全部導回主畫面
const defaultRoute: Route = {
  path: appRoutePath.dashboard,
  redirectTo: dashboardRoutePath.task,
  pathMatch: 'full'
};

// 導覽頁的路由設定
const dashboardRoute: Route = {
  path: appRoutePath.dashboard,
  component: DashboardComponent,
  children: [
    {
      path: dashboardRoutePath.task,
      loadChildren: '../task/task.module#TaskModule'
    },
    {
      path: dashboardRoutePath.progress,
      loadChildren: '../progress/progress.module#ProgressModule'
    },
    {
      path: dashboardRoutePath.complete,
      loadChildren: '../complete/complete.module#CompleteModule'
    }
  ]
};

// 全部的路徑設定
const routes: Routes = [
  defaultRoute,
  dashboardRoute
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
